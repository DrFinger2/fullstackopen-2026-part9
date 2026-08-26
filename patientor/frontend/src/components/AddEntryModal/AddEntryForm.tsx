import { useState, SyntheticEvent } from "react";
import { TextField, Grid, Button, Stack, MenuItem } from "@mui/material";
import { EntryFormValues, HealthCheckRating } from "../../types";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
}

const AddEntryForm = ({ onCancel, onSubmit }: Props) => {
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [description, setDescription] = useState("");
  const [healthCheckRating, setHealthCheckRating] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    const rating =
      healthCheckRating === ""
        ? undefined
        : (Number(healthCheckRating) as HealthCheckRating);

    const codes = diagnosisCodes
      ? diagnosisCodes.split(",").map((code) => code.trim())
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
    <div>
      <form onSubmit={addEntry}>
        <Stack spacing={2}>
          <TextField
            label="Date"
            placeholder="YYYY-MM-DD"
            fullWidth
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
          <TextField
            label="Specialist"
            fullWidth
            value={specialist}
            onChange={({ target }) => setSpecialist(target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <TextField
            select
            label="Health check rating"
            fullWidth
            value={healthCheckRating}
            onChange={({ target }) => setHealthCheckRating(target.value)}
          >
            <MenuItem value="" disabled>
              Select a rating
            </MenuItem>
            <MenuItem value={0}>Healthy</MenuItem>
            <MenuItem value={1}>Low risk</MenuItem>
            <MenuItem value={2}>High risk</MenuItem>
            <MenuItem value={3}>Critical risk</MenuItem>
          </TextField>
          <TextField
            label="Diagnosis codes"
            placeholder="comma separated, e.g. Z57.1, M51.2"
            fullWidth
            value={diagnosisCodes}
            onChange={({ target }) => setDiagnosisCodes(target.value)}
          />
        </Stack>

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
      </form>
    </div>
  );
};

export default AddEntryForm;
