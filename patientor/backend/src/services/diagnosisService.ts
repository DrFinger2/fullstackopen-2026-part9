import diagnosisData from "../data/diagnoses.ts";
import type { Diagnosis } from "../types/types.ts";

const getEntries = (): Diagnosis[] => {
  return diagnosisData;
};

const addDiagnosis = () => {
  return null;
};

export default {
  getEntries,
  addDiagnosis,
};
