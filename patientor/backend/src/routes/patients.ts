import express from "express";
import patientService from "../services/patientService.ts";
import getErrorMessage from "../utils/getErrorMessage.ts";
import { NewPatientSchema } from "../utils/schemas.ts";
const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const data = patientService.getNonSensitiveEntries();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(getErrorMessage(error));
  }
});

router.post("/", (req, res) => {
  try {
    const newEntry = NewPatientSchema.parse(req.body);
    const addedEntry = patientService.addPatient(newEntry);
    res.status(200).send(addedEntry);
  } catch (error: unknown) {
    res.status(400).send(getErrorMessage(error));
  }
});

export default router;
