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

const addPatient = (entry: NewPatientEntry): NonSensitivePatientEntry => {
  const id = uuid();
  const patient: PatientEntry = { ...entry, id: id };
  patientData.push(patient);

  return {
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
  };
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
