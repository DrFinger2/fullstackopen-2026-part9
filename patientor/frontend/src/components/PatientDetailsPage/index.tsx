import patientService from "../../services/patients";
import diagnosisService from "../../services/diagnosis";
import { useParams } from "react-router-dom";
import type { Diagnosis, PatientDetails } from "../../types";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import DetailRow from "../DetailRow";
import EntryDetails from "./EntryDetails";
import Show from "../Show";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<PatientDetails | null | undefined>(
    undefined,
  );
  const [allDiagnoses, setAllDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setDetails(undefined);
        if (!id) return;
        const details = await patientService.getById(id);
        setDetails(details);
      } catch {
        setDetails(null);
      }
    };
    fetch();
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      const data = await diagnosisService.getAll();
      setAllDiagnoses(data);
    };
    fetch();
  }, []);

  const missing = "Patient ID is missing from the URL.";
  const loading = "Loading...";
  const notFound = "Patient not found.";

  if (!id) {
    return <Typography color="error">{missing}</Typography>;
  } else if (details === undefined) {
    return <Typography>{loading}</Typography>;
  } else if (details === null) {
    return <Typography color="error">{notFound}</Typography>;
  }

  const codes = new Set(details.entries.flatMap((e) => e.diagnosisCodes ?? []));
  const entries = details.entries;
  const diagnoses = allDiagnoses.filter((d) => codes.has(d.code));

  return (
    <Container>
      <Typography variant="h4">{details.name}</Typography>
      <DetailRow label="Gender" value={details.gender} />
      <DetailRow label="SSN" value={details.ssn} />
      <DetailRow label="Occupation" value={details.occupation} />
      <DetailRow label="Date of Birth" value={details.dateOfBirth} />

      <Show when={entries.length > 0}>
        <Typography>
          <strong>Entries:</strong>
        </Typography>
        {entries.map((entry) => (
          <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
        ))}
      </Show>
    </Container>
  );
};

export default PatientDetailsPage;
