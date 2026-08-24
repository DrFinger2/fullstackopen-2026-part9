import express from "express";
import calculateBmi from "./bmiCalculator.ts";

const app = express();
const PORT = 3003;

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const width = Number(req.query.weight);

  if (!req.query.height || !req.query.weight || isNaN(height) || isNaN(width)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(height, width);
  return res.status(200).json({ height, width, bmi });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Address: http://localhost:${PORT}`);
});
