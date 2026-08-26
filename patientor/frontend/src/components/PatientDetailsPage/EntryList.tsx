import type { Entry, Diagnosis } from "../../types";
import { SubHeader } from "../_common/Headings";
import EntryDetails from "./EntryDetails";
import Show from "../_common/Show";

interface Props {
  entries: Entry[];
  diagnoses: Diagnosis[]; // already filtered to only those used
}

const EntryList = ({ entries, diagnoses }: Props) => {
  return (
    <Show when={entries.length > 0}>
      <SubHeader>Entries:</SubHeader>
      {entries.map((entry) => (
        <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
      ))}
    </Show>
  );
};

export default EntryList;
