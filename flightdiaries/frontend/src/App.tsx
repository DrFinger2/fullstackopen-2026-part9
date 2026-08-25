import { useEffect, useState } from "react";
import diaryService from "./services/diaryService";
import type { DiaryEntry } from "./utils/types";
import Header from "./components/Header";
import Content from "./components/Content";

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
      <Header name="Flight diaries" />
      <Content entries={entries} />
    </div>
  );
};

export default App;
