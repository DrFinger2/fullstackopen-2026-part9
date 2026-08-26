import { useState, SyntheticEvent } from "react";
import { Grid, Button, Stack, Alert } from "@mui/material";
import { EntryFormValues, HealthCheckRating } from "../../types";
import { healthCheckRatingOptions } from "./options";
import TextInputField from "../_common/TextInputField";
import SelectInputField from "../_common/SelectInputField";
import DateInputField from "../_common/DateInputField";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
}

const HealthCheckForm = ({ onCancel, onSubmit }: Props) => {
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [description, setDescription] = useState("");
  const [healthCheckRating, setHealthCheckRating] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setError(null);

    const rating = healthCheckRating
      ? (Number(healthCheckRating) as HealthCheckRating)
      : undefined;

    const codes = diagnosisCodes
      ? diagnosisCodes.split(",").map((c) => c.trim())
      : undefined;

    onSubmit({
      type: "HealthCheck",
      date,
      specialist,
      description,
      healthCheckRating: rating,
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

        <SelectInputField
          label="Health check rating"
          value={healthCheckRating}
          set={setHealthCheckRating}
          options={healthCheckRatingOptions}
          disabledOption={{ value: "", label: "Select a rating" }}
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

export default HealthCheckForm;
