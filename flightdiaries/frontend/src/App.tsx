import { useEffect, useState } from "react";
import type { DiaryEntry, NotificationEntry } from "./utils/types";
import type { NewDiaryEntry } from "./utils/types";
import getErrorMessage from "./utils/getErrorMessage";
import diaryService from "./services/diaryService";
import DiariesPage from "./pages/DiariesPage";
import NewDiaryPage from "./pages/NewDiaryPage";
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
      return notify("Added new entry!", "success");
    } catch (error) {
      return notify(getErrorMessage(error), "error");
    }
  };

  const notify = (message: string, type: "error" | "success") => {
    setNotification({
      message: message,
      type: type,
      idx: notification.idx + 1,
    });
    return type === "success";
  };

  return (
    <div>
      <Notification notification={notification} />
      <NewDiaryPage onSubmit={addEntry} />
      <DiariesPage entires={entries} />
    </div>
  );
};

export default App;
