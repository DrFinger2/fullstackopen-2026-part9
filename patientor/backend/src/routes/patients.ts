import express from "express";
import patientService from "../services/patientService.ts";
import parseNewPatientEntry from "../utils/parseNewPatientEntry.ts";
import getErrorMessage from "../utils/getErrorMessage.ts";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const data = patientService.getNonSensitiveEntries();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).json({ error: getErrorMessage(error) });
  }
});

router.post("/", (req, res) => {
  try {
    const newEntry = parseNewPatientEntry(req.body);
    const addedEntry = patientService.addPatient(newEntry);
    res.status(200).send(addedEntry);
  } catch (error: unknown) {
    res.status(400).json({ error: getErrorMessage(error) });
  }
});

export default router;
