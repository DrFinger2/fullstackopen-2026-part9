import express from "express";
import diagnosisService from "../services/diagnosisService.ts";
import getErrorMessage from "../utils/getErrorMessage.ts";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const data = diagnosisService.getEntries();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(getErrorMessage(error));
  }
});

router.post("/", (_req, res) => {
  res.send("Saving a patient!");
});

export default router;
