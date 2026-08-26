import type { HealthCheckEntry, HospitalEntry, Entry } from "../../types";
import type { OccupationalHealthcareEntry } from "../../types";

import { Container, Typography } from "@mui/material";
import HealthRatingBar from "../HealthRatingBar";
import EntryField from "../EntryField";

interface Props {
  entries: Entry[];
}

const Entries = (props: Props) => {
  const RenderEntry = (entry: Entry) => {
    return (
      <>
        <EntryField label="Description" value={entry.description} />
        <EntryField label="Date" value={entry.date} />
        <EntryField label="Specialist" value={entry.specialist} />
        <EntryField
          label="Diagnosis"
          value={entry.diagnosisCodes?.join(", ")}
        />
      </>
    );
  };

  const RenderHealthCheckEntry = (entry: HealthCheckEntry) => {
    return (
      <>
        {RenderEntry(entry)}
        <HealthRatingBar rating={entry.healthCheckRating} showText={false} />
      </>
    );
  };

  const RenderHospitalEntry = (entry: HospitalEntry) => {
    return (
      <>
        {RenderEntry(entry)}
        <Typography>
          <strong>Discharge</strong>
        </Typography>
        <Container>
          <EntryField label="Date" value={entry.discharge.date} />
          <EntryField label="Criteria" value={entry.discharge.criteria} />
        </Container>
      </>
    );
  };

  const RenderOccupationalHealthcareEntry = (
    entry: OccupationalHealthcareEntry,
  ) => {
    const start = entry?.sickLeave?.startDate;
    const end = entry?.sickLeave?.endDate;

    return (
      <>
        {RenderEntry(entry)}
        <EntryField label="Employer" value={entry.employerName} />
        {entry.sickLeave && (
          <>
            <Typography>
              <strong>Sick leave:</strong>
            </Typography>
            <Container>
              <EntryField label="Start date" value={start} />
              <EntryField label="End date" value={end} />
            </Container>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <Typography>
        <strong>Entries:</strong>
      </Typography>
      {props.entries.map((entry) => {
        let content;
        switch (entry.type) {
          case "HealthCheck":
            content = RenderHealthCheckEntry(entry);
            break;
          case "Hospital":
            content = RenderHospitalEntry(entry);
            break;
          case "OccupationalHealthcare":
            content = RenderOccupationalHealthcareEntry(entry);
            break;
          default:
            content = <Typography>Entry type not implemented</Typography>;
        }
        return (
          <Container key={entry.id}>
            {content}
            <br />
          </Container>
        );
      })}
    </>
  );
};

export default Entries;
