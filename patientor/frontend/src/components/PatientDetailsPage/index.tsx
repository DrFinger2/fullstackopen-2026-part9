import type { Diagnosis, PatientDetails, EntryFormValues } from "../../types";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import diagnosisService from "../../services/diagnosis";
import patientService from "../../services/patients";
import getErrorMessage from "../../utils/getErrorMessage";

// Components
import { Header, SubHeader } from "../_common/Headings";
import { Button } from "@mui/material";
import AddEntryModal from "../AddEntryModal/Index";
import EntryDetails from "./EntryDetails";
import DetailRow from "./DetailRow";
import Show from "../_common/Show";

const PatientDetailsPage = () => {
  const { id } = useParams();
  const [error, setError] = useState<string>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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

  const SubmitEntry = async (values: EntryFormValues) => {
    if (!id) return;
    try {
      const entry = await patientService.addEntry(id, values);
      setDetails(
        (prev) => prev && { ...prev, entries: prev.entries.concat(entry) },
      );
      setModalOpen(false);
    } catch (error: unknown) {
      setError(getErrorMessage(error));
    }
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };
  const openModal = (): void => {
    setModalOpen(true);
  };

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
      <Header>{details.name}</Header>
      <DetailRow label="Gender" value={details.gender} />
      <DetailRow label="SSN" value={details.ssn} />
      <DetailRow label="Occupation" value={details.occupation} />
      <DetailRow label="Date of Birth" value={details.dateOfBirth} />
      <Button variant="contained" onClick={openModal}>
        Add entry
      </Button>
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={SubmitEntry}
        error={error}
        onClose={closeModal}
      />
      <Show when={entries.length > 0}>
        <SubHeader>Entries:</SubHeader>
        {entries.map((entry) => (
          <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
        ))}
      </Show>
    </Container>
  );
};

export default PatientDetailsPage;
