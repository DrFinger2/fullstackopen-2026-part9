import diagnosisData from "../data/diagnoses.ts";
import type { DiagnosisEntry } from "../utils/types.ts";

const getEntries = (): DiagnosisEntry[] => {
  return diagnosisData;
};

const addDiagnosis = () => {
  return null;
};

export default {
  getEntries,
  addDiagnosis,
};
