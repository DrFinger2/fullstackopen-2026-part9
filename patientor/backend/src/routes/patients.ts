import express from "express";
import patientService from "../services/patientService.ts";
import getErrorMessage from "../utils/getErrorMessage.ts";
import { errorMiddleware, newPatientParser } from "../utils/middleware.ts";
import type { NewPatientEntry } from "../utils/types.ts";
import type { NonSensitivePatientEntry } from "../utils/types.ts";
import type { Request, Response } from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const data = patientService.getNonSensitiveEntries();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(getErrorMessage(error));
  }
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

router.use(errorMiddleware);

export default router;
