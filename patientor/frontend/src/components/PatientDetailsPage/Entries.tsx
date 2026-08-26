import { EntryDetails } from "./EntryDetails";
import type { Entry, Diagnosis } from "../../types";
import { Container, Typography } from "@mui/material";

interface Props {
  entries: Entry[];
  diagnoses: Diagnosis[];
}

const Entries = ({ entries, diagnoses }: Props) => {
  return (
    <>
      <Typography>
        <strong>Entries:</strong>
      </Typography>
      {entries.map((entry) => (
        <Container key={entry.id}>
          <EntryDetails entry={entry} diagnoses={diagnoses} />
          <br />
        </Container>
      ))}
    </>
  );
};
export default Entries;
