import { useState, SyntheticEvent } from "react";
import { Grid, Button, Stack } from "@mui/material";
import { EntryFormValues, Diagnosis } from "../../types";
import { diagnosisCodeOptions } from "./options";
import TextInputField from "../_common/TextInputField";
import DateInputField from "../_common/DateInputField";
import MultiSelectInputField from "../_common/MultiSelectInputField";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
  diagnoses: Diagnosis[];
}

const HospitalForm = ({ onCancel, onSubmit, diagnoses }: Props) => {
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [description, setDescription] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [dischargeCriteria, setDischargeCriteria] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const codes = diagnosisCodes.length > 0 ? diagnosisCodes : undefined;

    const discharge = {
      date: dischargeDate,
      criteria: dischargeCriteria,
    };

    onSubmit({
      type: "Hospital",
      date,
      specialist,
      description,
      discharge: discharge,
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
        <DateInputField
          label="Discharge date"
          value={dischargeDate}
          set={setDischargeDate}
        />

        <TextInputField
          label="Discharge criteria"
          value={dischargeCriteria}
          set={setDischargeCriteria}
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

export default HospitalForm;
