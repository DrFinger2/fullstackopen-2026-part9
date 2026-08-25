import type { DiaryEntry } from "../utils/types";
import EntryDetails from "./EntryDetails";

interface ContentProps {
  entries: DiaryEntry[];
}

const Content = ({ entries }: ContentProps) => {
  return (
    <div>
      {entries.map((entry) => (
        <EntryDetails key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default Content;
