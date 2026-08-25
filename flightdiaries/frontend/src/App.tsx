import { useEffect, useState } from "react";
import diaryService from "./services/diaryService";
import type { DiaryEntry, NotificationEntry } from "./utils/types";
import FlightDiariesPage from "./pages/FlightDiariesPage";
import AddNewDiaryPage from "./pages/AddNewDiaryPage";
import type { NewDiaryEntry } from "./utils/types";
import Notification from "./components/Notification";
const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  const [notification, setNotification] = useState<NotificationEntry>({
    message: "",
    type: "success",
    idx: 0,
  });

  useEffect(() => {
    const run = async () => {
      const data: DiaryEntry[] = await diaryService.getAll();
      setEntries(data);
    };
    run();
  }, []);

  const addEntry = async (newEntry: NewDiaryEntry) => {
    try {
      const entry = await diaryService.addNew(newEntry);
      setEntries(entries.concat(entry));
      notify("Added new entry!", "success");
      return true;
    } catch (error) {
      console.error(error);
      notify("failed to add new entry!", "error");
      return false;
    }
  };

  const notify = (message: string, type: "error" | "success") => {
    setNotification({
      message: message,
      type: type,
      idx: notification.idx + 1,
    });
  };

  return (
    <div>
      <Notification notification={notification} />
      <AddNewDiaryPage onSubmit={addEntry} />
      <FlightDiariesPage entires={entries} />
    </div>
  );
};

export default App;
