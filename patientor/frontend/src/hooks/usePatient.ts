import { useState, useEffect } from "react";
import patientService from "../services/patients";
import getErrorMessage from "../utils/getErrorMessage";
import type { PatientDetails, EntryFormValues } from "../types";

export const usePatient = (id: string | undefined) => {
  const [patient, setPatient] = useState<PatientDetails | null | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setPatient(null);
      setIsLoading(false);
      return;
    }

    const fetch = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await patientService.getById(id);
        setPatient(data);
      } catch (e) {
        setPatient(null);
        setError(getErrorMessage(e));
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [id]);

  const addEntry = async (values: EntryFormValues) => {
    if (!id || !patient) {
      return { success: false, error: "No patient loaded" };
    }

    try {
      const newEntry = await patientService.addEntry(id, values);
      setPatient({
        ...patient,
        entries: patient.entries.concat(newEntry),
      });
      return { success: true };
    } catch (e) {
      return { success: false, error: getErrorMessage(e) };
    }
  };

  return { patient, isLoading, error, addEntry };
};
