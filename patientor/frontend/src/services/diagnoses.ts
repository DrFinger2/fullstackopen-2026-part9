import axios from "axios";
import { Diagnosis } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);

  return data;
};

const getByCode = async (code: string) => {
  const { data } = await axios.get<Diagnosis>(
    `${apiBaseUrl}/diagnoses/${code}`,
  );
  return data;
};

const getByCodes = async (codes: string[]): Promise<Diagnosis[]> => {
  const diagnoses: Diagnosis[] = [];

  for (const code of codes) {
    const address = `${apiBaseUrl}/diagnoses/${code}`;
    const { data } = await axios.get<Diagnosis>(address);
    if (data) {
      diagnoses.push(data);
    }
  }

  return diagnoses;
};

export default {
  getAll,
  getByCode,
  getByCodes,
};
