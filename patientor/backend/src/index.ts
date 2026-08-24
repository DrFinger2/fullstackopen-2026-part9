import express from "express";
import patientsRouter from "./routes/patients.ts";

const app = express();

app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/patients", patientsRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server address: http://localhost:${PORT}/api/ping`);
});
