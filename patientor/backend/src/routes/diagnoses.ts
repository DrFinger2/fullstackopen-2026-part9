import express from "express";
import diagnosisService from "../services/diagnosisService.ts";
import { errorMiddleware } from "../utils/middleware.ts";
const router = express.Router();

router.get("/", (_req, res) => {
  const data = diagnosisService.getEntries();
  return res.status(200).send(data);
});

router.post("/", (_req, res) => {
  res.send("Saving a patient!");
});

router.use(errorMiddleware);

export default router;
