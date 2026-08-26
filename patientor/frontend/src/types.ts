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

// placeholder for now, same as backend
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Entry {}

export interface PatientDetails extends Patient {
  entries: Entry[];
}
export type PatientFormValues = Omit<Patient, "id" | "entries">;
