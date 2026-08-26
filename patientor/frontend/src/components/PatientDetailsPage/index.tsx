import { useParams } from "react-router-dom";
import type { Patient } from "../../types";
import patients from "../../services/patients";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<Patient | null | undefined>(undefined);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setDetails(undefined);
        if (!id) {
          return;
        }
        const data = await patients.get(id);
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
      <Typography>
        <strong>Gender:</strong> {details.gender}
      </Typography>
      <Typography>
        <strong>SSN:</strong> {details.ssn}
      </Typography>
      <Typography>
        <strong>Occupation:</strong> {details.occupation}
      </Typography>
      <Typography>
        <strong>Date of Birth:</strong> {details.dateOfBirth}
      </Typography>
    </Container>
  );
};

export default PatientDetailsPage;
