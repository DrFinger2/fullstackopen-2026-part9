import axios from "axios";
import { z } from "zod";
import { DiaryEntrySchema, type DiaryEntry } from "../utils/types";
const BASE_URL = "http://localhost:3000/api/diaries";

const getAll = async (): Promise<DiaryEntry[]> => {
  const response = await axios.get<unknown>(BASE_URL);
  return z.array(DiaryEntrySchema).parse(response.data);
};

export default { getAll };
