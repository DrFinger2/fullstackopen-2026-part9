import type { DiaryEntry } from "../utils/types";

interface EntryDetailsProps {
  entry: DiaryEntry;
}

const EntryDetails = ({ entry }: EntryDetailsProps) => {
  return (
    <fieldset>
      <legend>{entry.date}</legend>
      <p>
        <strong>Weather:</strong> {entry.weather}
      </p>
      <p>
        <strong>Visibility:</strong> {entry.visibility}
      </p>
      {entry.comment && (
        <p>
          <strong>Comment:</strong> {entry.comment}
        </p>
      )}
    </fieldset>
  );
};

export default EntryDetails;
