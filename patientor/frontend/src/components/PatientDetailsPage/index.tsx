import patientService from "../../services/patients";
import diagnosisService from "../../services/diagnosis";
import { useParams } from "react-router-dom";
import type { Diagnosis, PatientDetails } from "../../types";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import DetailRow from "../DetailRow";
import Entries from "./Entries";

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
        if (!id) throw new Error();
        const details = await patientService.getById(id);
        setDetails(details);
      } catch {
        setDetails(null);
      }
    };
    fetch();
  }, [id]);

  useEffect(() => {
    diagnosisService.getAll().then(setAllDiagnoses);
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
  const filtered = allDiagnoses.filter((d) => codes.has(d.code));

  return (
    <Container>
      <Typography variant="h4">{details.name}</Typography>
      <DetailRow label="Gender" value={details.gender} />
      <DetailRow label="SSN" value={details.ssn} />
      <DetailRow label="Occupation" value={details.occupation} />
      <DetailRow label="Date of Birth" value={details.dateOfBirth} />
      {details.entries.length > 0 && (
        <Entries entries={details.entries} diagnoses={filtered} />
      )}
    </Container>
  );
};

export default PatientDetailsPage;
