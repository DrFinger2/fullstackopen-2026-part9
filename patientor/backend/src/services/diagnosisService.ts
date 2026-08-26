import diagnosisData from "../data/diagnoses.ts";
import type { Diagnosis } from "../utils/types.ts";

const getDiagnoses = (): Diagnosis[] => {
  return diagnosisData;
};

const getDiagnosis = (code: string): Diagnosis | undefined => {
  return diagnosisData.find((diagnosis) => diagnosis.code === code);
};

const addDiagnosis = () => {
  return null;
};

export default {
  getDiagnoses,
  getDiagnosis,
  addDiagnosis,
};
