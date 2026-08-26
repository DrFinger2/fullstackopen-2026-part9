import type { EntryFormValues } from "../../types";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePatient } from "../../hooks/usePatient";
import { useDiagnoses } from "../../hooks/useDiagnoses";

// Components
import { Header } from "../_common/Headings";
import { Button } from "@mui/material";
import AddEntryModal from "../AddEntryModal/Index";
import DetailRow from "./DetailRow";
import EntryList from "./EntryList";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const { patient, isLoading, error, addEntry } = usePatient(id);
  const { diagnoses } = useDiagnoses();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | undefined>();

  const submitEntry = async (values: EntryFormValues) => {
    const result = await addEntry(values);
    if (result.success) {
      setModalOpen(false);
      setSubmitError(undefined);
    } else {
      setSubmitError(result.error);
    }
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSubmitError(undefined);
  };
  const openModal = (): void => {
    setModalOpen(true);
  };

  const missing = "Patient ID is missing from the URL.";
  const loading = "return <Typography>Loading patient data...";
  const notFound = "Patient not found.";

  if (!id) {
    return <Typography color="error">{missing}</Typography>;
  } else if (isLoading) {
    return <Typography>{loading}</Typography>;
  } else if (error) {
    return <Typography color="error">{error}</Typography>;
  } else if (!patient) {
    return <Typography color="error">{notFound}</Typography>;
  }

  const codes = new Set(patient.entries.flatMap((e) => e.diagnosisCodes ?? []));
  const filtered = diagnoses.filter((d) => codes.has(d.code));

  return (
    <Container>
      <Header>{patient.name}</Header>
      <DetailRow label="Gender" value={patient.gender} />
      <DetailRow label="SSN" value={patient.ssn} />
      <DetailRow label="Occupation" value={patient.occupation} />
      <DetailRow label="Date of Birth" value={patient.dateOfBirth} />

      <Button variant="contained" onClick={openModal}>
        Add entry
      </Button>

      <AddEntryModal
        diagnoses={diagnoses}
        modalOpen={modalOpen}
        onSubmit={submitEntry}
        error={submitError}
        onClose={closeModal}
      />

      <EntryList entries={patient.entries} diagnoses={filtered} />
    </Container>
  );
};

export default PatientDetailsPage;
