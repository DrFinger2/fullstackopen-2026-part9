import { Container, Typography } from "@mui/material";
import type {
  HealthCheckEntry,
  HospitalEntry,
  OccupationalHealthcareEntry,
  Entry,
} from "../../types";

interface Props {
  entries: Entry[];
}

const Entries = (props: Props) => {
  const RenderEntry = (entry: Entry) => {
    return (
      <>
        <Typography>
          <strong>Description:</strong> {entry.description}
        </Typography>
        <Typography>
          <strong>Date:</strong> {entry.date}
        </Typography>
        <Typography>
          <strong>Specialist:</strong> {entry.specialist}
        </Typography>
        <Typography>
          <strong>Diagnosis:</strong> {entry.diagnosisCodes?.join(", ")}
        </Typography>
      </>
    );
  };
  const RenderHealthCheckEntry = (entry: HealthCheckEntry) => {
    return (
      <>
        {RenderEntry(entry)}
        <Typography>
          <strong>Rating:</strong> {entry.healthCheckRating}
        </Typography>
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
          <Typography>Date: {entry.discharge.date}</Typography>
          <Typography>Criteria: {entry.discharge.criteria}</Typography>
        </Container>
      </>
    );
  };

  const RenderOccupationalHealthcareEntry = (
    entry: OccupationalHealthcareEntry,
  ) => {
    return (
      <>
        {RenderEntry(entry)}
        <Typography>
          <strong>Employer name: </strong>
          {entry.employerName}
        </Typography>

        {entry.sickLeave && (
          <Container>
            <Typography>
              <strong>Sick leave</strong>
            </Typography>
            <Typography>Start date:{entry.sickLeave.startDate}</Typography>
            <Typography>End date: {entry.sickLeave.endDate}</Typography>{" "}
          </Container>
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
        return <Container key={entry.id}>{content}</Container>;
      })}
    </>
  );
};

export default Entries;
