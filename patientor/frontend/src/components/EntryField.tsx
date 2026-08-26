import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  value?: string | number;
}

const EntryField = (props: Props) => {
  const text = {
    width: 130,
    color: " 	rgb(50, 50, 50)",
    flexShrink: 0,
  };
  const container = {
    display: "flex",
    gap: 1,
    mb: 0.5,
    borderBottom: "1px solid #ccc",
    pb: 0.5,
  };

  return (
    <Box sx={container}>
      <Typography component="span" sx={text}>
        {props.label}:
      </Typography>
      <Typography component="span">{props.value ?? "—"}</Typography>
    </Box>
  );
};

export default EntryField;
