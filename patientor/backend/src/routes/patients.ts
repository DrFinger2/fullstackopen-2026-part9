import express from "express";
import patientService from "../services/patientService.ts";
import parseNewPatientEntry from "../utils/parseNewPatientEntry.ts";
import type {
  NewPatientEntry,
  NonSensitivePatientEntry,
} from "../types/types.ts";

const router = express.Router();

router.get("/", (_req, res) => {
  const data = patientService.getNonSensitiveEntries();
  res.status(200).send(data);
});

router.post("/", (req, res) => {
  const newEntry: NewPatientEntry = parseNewPatientEntry(req.body);
  const addedEntry: NonSensitivePatientEntry =
    patientService.addPatient(newEntry);
  res.status(200).send(addedEntry);
});

export default router;
