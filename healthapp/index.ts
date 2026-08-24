import express, { Request, Response } from "express";
import calculateBmi from "./bmiCalculator.ts";
import calculateExercises from "./exerciseCalculator.ts";
const app = express();
const PORT = 3003;

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!req.query.height || !req.query.weight || isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(height, weight);
  return res.status(200).json({ height, weight, bmi });
});

app.get("/exercises", (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercixes, target } = req.body;

  if (!daily_exercixes || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }
  if (!Array.isArray(daily_exercixes)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  if (typeof target !== "number") {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  for (const number of daily_exercixes) {
    if (typeof number !== "number") {
      return res.status(400).json({ error: "malformatted parameters" });
    }
  }
  const result = calculateExercises(daily_exercixes as number[], target);
  return res.status(200).json({ ...result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Address: http://localhost:${PORT}`);
});
