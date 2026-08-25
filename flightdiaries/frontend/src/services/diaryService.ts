import axios from "axios";
import { z } from "zod";
import {
  DiaryEntrySchema,
  type DiaryEntry,
  type NewDiaryEntry,
} from "../utils/types";
const BASE_URL = "http://localhost:3000/api/diaries";

const getAll = async (): Promise<DiaryEntry[]> => {
  const response = await axios.get<unknown>(BASE_URL);
  return z.array(DiaryEntrySchema).parse(response.data);
};

const addNew = async (entry: NewDiaryEntry): Promise<DiaryEntry> => {
  const response = await axios.post(BASE_URL, entry);
  return DiaryEntrySchema.parse(response.data);
};

export default { getAll, addNew };
