import express, { Request, Response } from "express";
import calculateBmi from "./bmiCalculator.ts";
import calculateExercises from "./exerciseCalculator.ts";
const app = express();
const PORT = 3003;

app.use(express.json());

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

app.post("/exercises", (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (daily_exercises === undefined || target === undefined) {
    return res.status(400).json({ error: "parameters missing" });
  }
  if (!Array.isArray(daily_exercises) || daily_exercises.length === 0) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  const targetNum = Number(target);
  if (isNaN(targetNum)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const exerciseHours: number[] = [];
  for (const number of daily_exercises) {
    if (isNaN(Number(number))) {
      return res.status(400).json({ error: "malformatted parameters" });
    }
    exerciseHours.push(Number(number));
  }

  const result = calculateExercises(exerciseHours, targetNum);
  return res.status(200).json({ ...result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Address: http://localhost:${PORT}`);
});
