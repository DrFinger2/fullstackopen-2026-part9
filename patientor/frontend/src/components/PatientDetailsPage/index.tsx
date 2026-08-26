import { useParams } from "react-router-dom";
import type { PatientDetails } from "../../types";
import patients from "../../services/patients";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import DetailRow from "../DetailRow";
import Entries from "./Entries";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<PatientDetails | null | undefined>(
    undefined,
  );

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setDetails(undefined);
        if (!id) return;
        const data = await patients.getById(id);
        setDetails(data || null);
      } catch {
        setDetails(null);
      }
    };
    fetchDetails();
  }, [id]);

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

  return (
    <Container>
      <Typography variant="h4">{details.name}</Typography>
      <DetailRow label="Gender" value={details.gender} />
      <DetailRow label="SSN" value={details.ssn} />
      <DetailRow label="Occupation" value={details.occupation} />
      <DetailRow label="Date of Birth" value={details.dateOfBirth} />
      {details.entries.length > 0 && <Entries entries={details.entries} />}
    </Container>
  );
};

export default PatientDetailsPage;
