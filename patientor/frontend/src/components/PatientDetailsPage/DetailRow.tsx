import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
  value: string | undefined;
}

const DetailRow = (props: Props) => {
  if (props.value === undefined) {
    return null;
  }
  const container = { display: "flex", gap: 1, mb: 0.5 };
  const text = { width: 130, fontWeight: "bold", flexShrink: 0 };

  return (
    <Box sx={container}>
      <Typography component="span" sx={text}>
        {props.label}:
      </Typography>
      <Typography component="span">{props.value}</Typography>
    </Box>
  );
};

export default DetailRow;
