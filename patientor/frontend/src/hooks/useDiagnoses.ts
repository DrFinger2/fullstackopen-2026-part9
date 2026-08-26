import { useState, useEffect } from "react";
import diagnosisService from "../services/diagnosis";
import type { Diagnosis } from "../types";
import getErrorMessage from "../utils/getErrorMessage";

export const useDiagnoses = () => {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      setIsLoading(true);
      try {
        const data = await diagnosisService.getAll();
        setDiagnoses(data);
      } catch (e) {
        setError(getErrorMessage(e));
      } finally {
        setIsLoading(false);
      }
    };
    fetchDiagnoses();
  }, []);

  return { diagnoses, isLoading, error };
};
