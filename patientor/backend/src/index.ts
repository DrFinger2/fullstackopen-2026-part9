import express from "express";
import diagnosisRouter from "./routes/diagnoses.ts";
import patientsRouter from "./routes/patients.ts";
import { errorMiddleware } from "./utils/middleware.ts";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosisRouter);
app.use("/api/patients", patientsRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server address: http://localhost:${PORT}/api/ping`);
});
