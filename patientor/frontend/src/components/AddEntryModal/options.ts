import { HealthCheckRating, ENTRY_TYPES } from "../../types";

export const healthCheckRatingOptions = [
  { value: String(HealthCheckRating.Healthy), label: "0 - Healthy" },
  { value: String(HealthCheckRating.LowRisk), label: "1 - Low risk" },
  { value: String(HealthCheckRating.HighRisk), label: "2 - High risk" },
  { value: String(HealthCheckRating.CriticalRisk), label: "3 - Critical risk" },
] as const;

export const entryTypeOptions = Object.values(ENTRY_TYPES).map((type) => ({
  value: type,
  label: type,
}));
