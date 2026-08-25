import express from "express";
import patientService from "../services/patientService.ts";
import { newPatientParser } from "../utils/middleware.ts";
import type { NewPatientEntry } from "../utils/types.ts";
import type { NonSensitivePatientEntry } from "../utils/types.ts";
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
    res: Response<NonSensitivePatientEntry>,
  ) => {
    const addedEntry = patientService.addPatient(req.body);
    res.status(200).send(addedEntry);
  },
);

export default router;
