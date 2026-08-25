import type { NewPatientEntry } from "../types/types.ts";
import {
  parseName,
  parseDate,
  parseSSN,
  parseGender,
  parseOccupation,
} from "./parsers.ts";

const parseNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    return {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };
  }

  throw new Error("Incorrect data: some fields are missing");
};

export default parseNewPatientEntry;
