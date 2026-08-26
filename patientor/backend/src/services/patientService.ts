import { v1 as uuid } from "uuid";
import patientData from "../data/patients.ts";

import type {
  NewPatientEntry,
  NonSensitivePatientEntry,
  PatientEntry,
} from "../utils/types.ts";

const getEntries = () => {
  return patientData;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const id = uuid();
  const patient: PatientEntry = { ...entry, id: id, entries: [] };
  patientData.push(patient);

  return patient;
};
const findById = (id: string): PatientEntry | undefined => {
  return patientData.find((patient) => patient.id === id);
};

export default {
  findById,
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
