import { useState, SyntheticEvent } from "react";
import { Grid, Button, Stack } from "@mui/material";
import { EntryFormValues, HealthCheckRating, Diagnosis } from "../../types";
import { healthCheckRatingOptions } from "./options";
import { diagnosisCodeOptions } from "./options";
import TextInputField from "../_common/TextInputField";
import SelectInputField from "../_common/SelectInputField";
import MultiSelectInputField from "../_common/MultiSelectInputField";
import DateInputField from "../_common/DateInputField";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
  diagnoses: Diagnosis[];
}

const HealthCheckForm = ({ onCancel, onSubmit, diagnoses }: Props) => {
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [description, setDescription] = useState("");
  const [healthCheckRating, setHealthCheckRating] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const rating = healthCheckRating
      ? (Number(healthCheckRating) as HealthCheckRating)
      : undefined;

    const codes = diagnosisCodes.length > 0 ? diagnosisCodes : undefined;

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

        <MultiSelectInputField
          label="Diagnosis codes"
          value={diagnosisCodes}
          set={setDiagnosisCodes}
          options={diagnosisCodeOptions(diagnoses)}
        />

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
