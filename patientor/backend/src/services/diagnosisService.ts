import diagnosisData from "../data/diagnoses.ts";
import type { Diagnosis } from "../utils/types.ts";

const getEntries = (): Diagnosis[] => {
  return diagnosisData;
};

const getEntry = (code: string): Diagnosis | undefined => {
  return diagnosisData.find((diagnosis) => diagnosis.code === code);
};

const addDiagnosis = () => {
  return null;
};

export default {
  getEntries,
  getEntry,
  addDiagnosis,
};
