import { TextField, MenuItem } from "@mui/material";

interface Props<T extends string | number> {
  label: string;
  value: T;
  set: (value: T) => void;
  options: readonly { value: T; label: string }[];
  disabledOption?: { value: T; label: string } | null;
  fullWidth?: boolean;
}

function SelectInputField<T extends string | number>({
  label,
  value,
  set,
  options,
  disabledOption,
  fullWidth = true,
}: Props<T>) {
  return (
    <TextField
      select
      label={label}
      fullWidth={fullWidth}
      value={value}
      onChange={({ target }) => set(target.value as T)}
    >
      {disabledOption && (
        <MenuItem value={disabledOption.value} disabled>
          {disabledOption.label}
        </MenuItem>
      )}
      {options.map(({ value, label }) => (
        <MenuItem key={String(value)} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectInputField;
