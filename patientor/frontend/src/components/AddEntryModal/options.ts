import { HealthCheckRating, ENTRY_TYPES } from "../../types";

export const healthCheckRatingOptions = [
  { value: String(HealthCheckRating.Healthy), label: "Healthy" },
  { value: String(HealthCheckRating.LowRisk), label: "Low risk" },
  { value: String(HealthCheckRating.HighRisk), label: "High risk" },
  { value: String(HealthCheckRating.CriticalRisk), label: "Critical risk" },
] as const;

export const entryTypeOptions = Object.values(ENTRY_TYPES).map((type) => ({
  value: type,
  label: type,
}));
