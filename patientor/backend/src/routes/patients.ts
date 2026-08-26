import express from "express";
import patientService from "../services/patientService.ts";
import { newPatientParser, newEntryParser } from "../utils/middleware.ts";
import type { NewPatient, Patient } from "../utils/types.ts";
import type { NewEntry, Entry } from "../utils/types.ts";
import type { Request, Response } from "express";

const router = express.Router();
type PostRequestType = Request<unknown, unknown, NewPatient>;

// ERROR MIDDLEWARE in index.ts manages route error handling.
router.get("/", (_req, res) => {
  const data = patientService.getNonSensitivePatients();
  res.status(200).send(data);
});

router.post(
  "/",
  newPatientParser,
  (req: PostRequestType, res: Response<Patient>) => {
    const addedEntry = patientService.addPatient(req.body);
    res.status(200).send(addedEntry);
  },
);

router.post(
  "/:id/entries",
  newEntryParser,
  (req: Request<{ id: string }, unknown, NewEntry>, res: Response<Entry>) => {
    const addedEntry = patientService.addEntry(req.params.id, req.body);
    if (addedEntry) {
      res.status(200).send(addedEntry);
    } else {
      res.status(404).send();
    }
  },
);

router.get(
  "/:id",
  (
    req: Request<{ id: string }, unknown, NewPatient>,
    res: Response<Patient>,
  ) => {
    const patient = patientService.findById(req.params.id);
    if (patient) {
      res.status(200).send(patient);
    } else {
      res.status(404).send();
    }
  },
);

export default router;
