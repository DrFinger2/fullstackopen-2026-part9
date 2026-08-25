import express from "express";
import diagnosisService from "../services/diagnosisService.ts";
const router = express.Router();

// ERROR MIDDLEWARE in index.ts manages all route error handling.
router.get("/", (_req, res) => {
  const data = diagnosisService.getEntries();
  return res.status(200).send(data);
});

router.post("/", (_req, res) => {
  res.send("Saving a patient!");
});

export default router;
