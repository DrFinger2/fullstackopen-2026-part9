import { useState } from "react";
import { Stack } from "@mui/material";
import { ENTRY_TYPES, EntryType } from "../../types";
import { EntryFormValues, Diagnosis } from "../../types";
import { entryTypeOptions } from "./options";
import SelectInputField from "../_common/SelectInputField";
import HealthCheckForm from "./HealthCheckForm";
import OccupationalForm from "./OccupationalForm";
import HospitalForm from "./HospitalForm";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
  diagnoses: Diagnosis[];
}

const AddEntryForm = ({ onCancel, onSubmit, diagnoses }: Props) => {
  const [entryType, setEntryType] = useState<EntryType>(
    ENTRY_TYPES.HealthCheck,
  );

  const renderForm = () => {
    switch (entryType) {
      case ENTRY_TYPES.HealthCheck:
        return (
          <HealthCheckForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            diagnoses={diagnoses}
          />
        );
      case ENTRY_TYPES.OccupationalHealthcare:
        return (
          <OccupationalForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            diagnoses={diagnoses}
          />
        );
      case ENTRY_TYPES.Hospital:
        return (
          <HospitalForm
            onCancel={onCancel}
            onSubmit={onSubmit}
            diagnoses={diagnoses}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Stack spacing={2}>
        <SelectInputField
          label="Entry type"
          value={entryType}
          set={setEntryType}
          options={entryTypeOptions}
        />

        {renderForm()}
      </Stack>
    </div>
  );
};

export default AddEntryForm;
