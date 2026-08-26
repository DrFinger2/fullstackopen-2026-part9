import { TextField, MenuItem, Checkbox, ListItemText } from "@mui/material";

interface Props<T extends string | number> {
  label: string;
  value: T[];
  set: (value: T[]) => void;
  options: readonly { value: T; label: string }[];
  fullWidth?: boolean;
}

function MultiSelectInputField<T extends string | number>({
  label,
  value,
  set,
  options,
  fullWidth = true,
}: Props<T>) {
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    set(target.value as unknown as T[]);

  return (
    <TextField
      select
      label={label}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      slotProps={{
        select: {
          multiple: true,
          renderValue: (selected) => (selected as T[]).join(", "),
        },
      }}
    >
      {options.map(({ value: optionValue, label }) => (
        <MenuItem key={String(optionValue)} value={optionValue}>
          <Checkbox checked={value.includes(optionValue)} />
          <ListItemText primary={label} />
        </MenuItem>
      ))}
    </TextField>
  );
}

export default MultiSelectInputField;
