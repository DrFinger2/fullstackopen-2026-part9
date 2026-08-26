import express from "express";
import diagnosisService from "../services/diagnosisService.ts";
const router = express.Router();

// ERROR MIDDLEWARE in index.ts manages route error handling.
router.get("/", (_req, res) => {
  const data = diagnosisService.getDiagnoses();
  return res.status(200).send(data);
});

router.get("/:code", (req, res) => {
  const { code } = req.params;
  const data = diagnosisService.getDiagnosis(code);
  return res.status(200).send(data);
});

router.post("/", (_req, res) => {
  res.send("Saving a patient!");
});

export default router;
