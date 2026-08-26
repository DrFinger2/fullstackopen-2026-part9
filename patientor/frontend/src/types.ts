export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;

export enum HealthCheckRating {
  Healthy = 0,
  LowRisk = 1,
  HighRisk = 2,
  CriticalRisk = 3,
}

interface Discharge {
  date: string;
  criteria: string;
}
interface SickLeave {
  startDate: string;
  endDate: string;
}

export const ENTRY_TYPES = {
  HealthCheck: "HealthCheck",
  Hospital: "Hospital",
  OccupationalHealthcare: "OccupationalHealthcare",
} as const;

export type EntryType = (typeof ENTRY_TYPES)[keyof typeof ENTRY_TYPES];

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}

export interface HealthCheckEntry extends BaseEntry {
  type: typeof ENTRY_TYPES.HealthCheck;
  healthCheckRating: HealthCheckRating | undefined;
}

export interface HospitalEntry extends BaseEntry {
  type: typeof ENTRY_TYPES.Hospital;
  discharge: Discharge;
}

export interface OccupationalEntry extends BaseEntry {
  type: typeof ENTRY_TYPES.OccupationalHealthcare;
  employerName: string;
  sickLeave?: SickLeave;
}

export type Entry = HospitalEntry | OccupationalEntry | HealthCheckEntry;

export type EntryFormValues =
  | Omit<HospitalEntry, "id">
  | Omit<OccupationalEntry, "id">
  | Omit<HealthCheckEntry, "id">;

export interface PatientDetails extends Patient {
  entries: Entry[];
}

export interface FormState {
  date: string;
  specialist: string;
  description: string;
  diagnosisCodes: string;
  entryType: EntryType;

  healthCheckRating?: string;
  employerName?: string;
  sickLeaveStart?: string;
  sickLeaveEnd?: string;
  dischargeDate?: string;
  dischargeCriteria?: string;
}
