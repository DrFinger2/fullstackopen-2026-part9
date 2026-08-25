import type { z } from "zod";
import type { NewPatientSchema } from "./schemas.ts";

export const Gender = {
  Male: "male",
  Female: "female",
  Other: "other",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export interface DiagnosisEntry {
  code: string;
  name: string;
  latin?: string;
}

export type NewPatientEntry = z.infer<typeof NewPatientSchema>;

export interface PatientEntry extends NewPatientEntry {
  id: string;
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;
