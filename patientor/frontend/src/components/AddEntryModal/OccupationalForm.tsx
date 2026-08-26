import { useState, SyntheticEvent } from "react";
import { Grid, Button, Stack, Alert } from "@mui/material";
import { EntryFormValues } from "../../types";
import TextInputField from "../_common/TextInputField";
import DateInputField from "../_common/DateInputField";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
}

const OccupationalForm = ({ onCancel, onSubmit }: Props) => {
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [description, setDescription] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [sickLeaveStart, setSickLeaveStart] = useState("");
  const [sickLeaveEnd, setSickLeaveEnd] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setError(null);

    const codes = diagnosisCodes
      ? diagnosisCodes.split(",").map((c) => c.trim())
      : undefined;

    const sickLeave =
      sickLeaveStart && sickLeaveEnd
        ? { startDate: sickLeaveStart, endDate: sickLeaveEnd }
        : undefined;

    onSubmit({
      type: "OccupationalHealthcare",
      date,
      specialist,
      description,
      employerName,
      sickLeave: sickLeave,
      diagnosisCodes: codes,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <DateInputField label="Date" value={date} set={setDate} />

        <TextInputField
          label="Specialist"
          value={specialist}
          set={setSpecialist}
        />
        <TextInputField
          label="Description"
          value={description}
          set={setDescription}
        />
        <TextInputField
          label="Employer name"
          value={employerName}
          set={setEmployerName}
        />
        <DateInputField
          label="Sick leave start"
          value={sickLeaveStart}
          set={setSickLeaveStart}
        />
        <DateInputField
          label="Sick leave end"
          value={sickLeaveEnd}
          set={setSickLeaveEnd}
        />

        <TextInputField
          label="Diagnosis codes"
          placeholder="comma separated, e.g. Z57.1, M51.2"
          value={diagnosisCodes}
          set={setDiagnosisCodes}
        />

        {error && <Alert severity="error">{error}</Alert>}

        <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
          <Grid size="auto">
            <Button
              color="secondary"
              variant="contained"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid size="auto">
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </form>
  );
};

export default OccupationalForm;
