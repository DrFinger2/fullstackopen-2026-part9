import { TextField } from "@mui/material";

type SetStringType = (value: string | ((prevState: string) => string)) => void;

interface Props {
  label: string;
  value: string;
  set: SetStringType;
  placeholder?: string;
  fullWidth?: boolean;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

const TextInputField = ({
  label,
  value,
  set,
  placeholder = "",
  fullWidth = true,
  type = "text",
  multiline = false,
  rows = 1,
}: Props) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      type={type}
      multiline={multiline}
      rows={rows}
      value={value}
      onChange={({ target }) => set(target.value)}
    />
  );
};

export default TextInputField;
