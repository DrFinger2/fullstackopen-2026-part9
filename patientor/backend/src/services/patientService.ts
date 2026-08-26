import { v1 as uuid } from "uuid";
import patientData from "../data/patients_full.ts";
import type { NewEntry, Entry } from "../utils/types.ts";
import type {
  NewPatient,
  NonSensitivePatient,
  Patient,
} from "../utils/types.ts";

const getPatients = () => {
  return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const id = uuid();
  const patient: Patient = { ...entry, id: id, entries: [] };
  patientData.push(patient);

  return patient;
};

const findById = (id: string): Patient | undefined => {
  return patientData.find((patient) => patient.id === id);
};

const addEntry = (patientId: string, entry: NewEntry): Entry | undefined => {
  const patient = findById(patientId);
  if (!patient) {
    return undefined;
  }
  const newEntry: Entry = { id: uuid(), ...entry };
  patient.entries.push(newEntry);
  return newEntry;
};

export default {
  findById,
  getPatients,
  getNonSensitivePatients,
  addPatient,
  addEntry,
};
