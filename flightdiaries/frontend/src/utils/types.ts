import { z } from "zod";

export const Weather = {
  Sunny: "sunny",
  Rainy: "rainy",
  Cloudy: "cloudy",
  Windy: "windy",
  Stormy: "stormy",
} as const;

export type Weather = (typeof Weather)[keyof typeof Weather];

export const Visibility = {
  Great: "great",
  Good: "good",
  Ok: "ok",
  Poor: "poor",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

export const DiaryEntrySchema = z.object({
  id: z.number(),
  date: z.iso.date(),
  weather: z.enum(Weather),
  visibility: z.enum(Visibility),
  comment: z.string().optional(),
});

export type DiaryEntry = z.infer<typeof DiaryEntrySchema>;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export interface NotificationEntry {
  message: string;
  type: "success" | "error" | "warning";
  idx: number;
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnosisEntry["code"]>;
}

export const HealthCheckRating = {
  Healthy: 0,
  LowRisk: 1,
  HighRisk: 2,
  CriticalRisk: 3,
} as const;

export type HealthCheckRating =
  (typeof HealthCheckRating)[keyof typeof HealthCheckRating];

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface Discharge {
  date: string;
  criteria: string;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}

interface SickLeave {
  startDate: string;
  endDate: string;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeave;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;
