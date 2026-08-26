import { useState } from "react";
import { TextField, MenuItem, Stack } from "@mui/material";
import { ENTRY_TYPES, EntryFormValues, EntryType } from "../../types";
import { entryTypeOptions } from "./options";

import HealthCheckForm from "./HealthCheckForm";
import OccupationalForm from "./OccupationalForm";
import HospitalForm from "./HospitalForm";

interface Props {
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
}

const AddEntryForm = ({ onCancel, onSubmit }: Props) => {
  const [entryType, setEntryType] = useState<EntryType>(
    ENTRY_TYPES.HealthCheck,
  );

  const renderForm = () => {
    switch (entryType) {
      case ENTRY_TYPES.HealthCheck:
        return <HealthCheckForm onCancel={onCancel} onSubmit={onSubmit} />;
      case ENTRY_TYPES.OccupationalHealthcare:
        return <OccupationalForm onCancel={onCancel} onSubmit={onSubmit} />;
      case ENTRY_TYPES.Hospital:
        return <HospitalForm onCancel={onCancel} onSubmit={onSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stack spacing={2}>
        <TextField
          select
          label="Entry type"
          fullWidth
          value={entryType}
          onChange={({ target }) => setEntryType(target.value as EntryType)}
        >
          {entryTypeOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        {renderForm()}
      </Stack>
    </div>
  );
};

export default AddEntryForm;
