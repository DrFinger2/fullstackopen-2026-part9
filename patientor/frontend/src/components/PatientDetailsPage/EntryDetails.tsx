import type { Entry, OccupationalEntry, Diagnosis } from "../../types";
import type { HealthCheckEntry, HospitalEntry } from "../../types";
import { Container, Typography } from "@mui/material";
import HealthRatingBar from "../HealthRatingBar";
import EntryField from "../EntryField";
import assertNever from "../../utils/assertNever";

const BaseEntry = ({
  entry,
  diagnoses,
}: {
  entry: Entry;
  diagnoses: Diagnosis[];
}) => {
  return (
    <>
      <EntryField label="Description" value={entry.description} />
      <EntryField label="Date" value={entry.date} />
      <EntryField label="Specialist" value={entry.specialist} />
      {entry.diagnosisCodes ? (
        <Typography>
          <strong>Diagnoses</strong>
        </Typography>
      ) : (
        <EntryField label="Diagnoses" value="-" />
      )}
      <Container>
        {entry.diagnosisCodes &&
          entry.diagnosisCodes.map((code) => {
            const name = diagnoses.find((d) => d.code === code)?.name;
            return <EntryField key={code} label={code} value={name} />;
          })}
      </Container>
    </>
  );
};

const HealthEntryDetails = ({
  entry,
  diagnoses,
}: {
  entry: HealthCheckEntry;
  diagnoses: Diagnosis[];
}) => {
  return (
    <Container>
      <BaseEntry entry={entry} diagnoses={diagnoses} />
      <HealthRatingBar rating={entry.healthCheckRating} showText={false} />
      <br />
    </Container>
  );
};

const HospitalEntryDetails = ({
  entry,
  diagnoses,
}: {
  entry: HospitalEntry;
  diagnoses: Diagnosis[];
}) => {
  return (
    <Container>
      <BaseEntry entry={entry} diagnoses={diagnoses} />
      <Typography>
        <strong>Discharge</strong>
      </Typography>
      <Container>
        <EntryField label="Date" value={entry.discharge.date} />
        <EntryField label="Criteria" value={entry.discharge.criteria} />
      </Container>
      <br />
    </Container>
  );
};

const OccupationEntryDetails = ({
  entry,
  diagnoses,
}: {
  entry: OccupationalEntry;
  diagnoses: Diagnosis[];
}) => {
  const start = entry?.sickLeave?.startDate;
  const end = entry?.sickLeave?.endDate;

  return (
    <Container>
      <BaseEntry entry={entry} diagnoses={diagnoses} />
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
      <br />
    </Container>
  );
};

const EntryDetails = ({
  entry,
  diagnoses,
}: {
  entry: Entry;
  diagnoses: Diagnosis[];
}) => {
  switch (entry.type) {
    case "HealthCheck":
      return <HealthEntryDetails entry={entry} diagnoses={diagnoses} />;
    case "Hospital":
      return <HospitalEntryDetails entry={entry} diagnoses={diagnoses} />;
    case "OccupationalHealthcare":
      return <OccupationEntryDetails entry={entry} diagnoses={diagnoses} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
