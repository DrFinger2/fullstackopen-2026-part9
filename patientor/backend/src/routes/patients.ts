import express from "express";
import patientService from "../services/patientService.ts";

const router = express.Router();

router.get("/", (_req, res) => {
  const data = patientService.getNonSensitiveEntries();
  res.status(200).send(data);
});

export default router;
