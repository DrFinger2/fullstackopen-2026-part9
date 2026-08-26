import express from "express";
import patientService from "../services/patientService.ts";
import { newPatientParser } from "../utils/middleware.ts";
import type { NewPatientEntry, PatientEntry } from "../utils/types.ts";
import type { Request, Response } from "express";

const router = express.Router();

// ERROR MIDDLEWARE in index.ts manages all route error handling.
router.get("/", (_req, res) => {
  const data = patientService.getNonSensitiveEntries();
  res.status(200).send(data);
});

router.post(
  "/",
  newPatientParser,
  (
    req: Request<unknown, unknown, NewPatientEntry>,
    res: Response<PatientEntry>,
  ) => {
    const addedEntry = patientService.addPatient(req.body);
    res.status(200).send(addedEntry);
  },
);

router.get(
  "/:id",
  (req: Request<{ id: string }>, res: Response<PatientEntry>) => {
    const patient = patientService.findById(req.params.id);
    if (patient) {
      res.status(200).send(patient);
    } else {
      res.status(404).send();
    }
  },
);

export default router;
