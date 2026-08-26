import { v1 as uuid } from "uuid";
import patientData from "../data/patients_full.ts";

import type {
  NewPatientEntry,
  NonSensitivePatient,
  Patient,
} from "../utils/types.ts";

const getEntries = () => {
  return patientData;
};

const getNonSensitiveEntries = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const id = uuid();
  const patient: Patient = { ...entry, id: id, entries: [] };
  patientData.push(patient);

  return patient;
};

const findById = (id: string): Patient | undefined => {
  return patientData.find((patient) => patient.id === id);
};

export default {
  findById,
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
