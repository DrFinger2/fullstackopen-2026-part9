import { TextField } from "@mui/material";

interface Props {
  label: string;
  value: string;
  set: (value: string) => void;
  fullWidth?: boolean;
}

const DateInputField = ({ label, value, set, fullWidth = true }: Props) => {
  return (
    <TextField
      label={label}
      type="date"
      fullWidth={fullWidth}
      value={value}
      onChange={({ target }) => set(target.value)}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  );
};

export default DateInputField;
