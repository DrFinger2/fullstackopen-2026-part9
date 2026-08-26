import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  value?: string | number;
  strong?: boolean;
}

const EntryField = ({ label, value = "—", strong = false }: Props) => {
  const text = {
    width: 130,
    color: " 	rgb(50, 50, 50)",
    flexShrink: 0,
    fontWeight: strong ? "bold" : "normal",
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
        {label}:
      </Typography>
      <Typography component="span">{value ?? "—"}</Typography>
    </Box>
  );
};

export default EntryField;
