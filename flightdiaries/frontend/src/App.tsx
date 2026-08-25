import { useEffect, useState } from "react";
import diaryService from "./services/diaryService";
import type { DiaryEntry } from "./utils/types";
import FlightDiariesPage from "./pages/FlightDiariesPage";
import AddNewDiaryPage from "./pages/AddNewDiaryPage";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const run = async () => {
      const data: DiaryEntry[] = await diaryService.getAll();
      setEntries(data);
    };
    run();
  }, []);

  return (
    <div>
      <AddNewDiaryPage />
      <FlightDiariesPage entires={entries} />
    </div>
  );
};

export default App;
