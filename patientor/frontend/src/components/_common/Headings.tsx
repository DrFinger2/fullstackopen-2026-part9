import { Typography, TypographyProps } from "@mui/material";

export const Header = (props: TypographyProps) => (
  <Typography variant="h4" sx={{ mb: 2 }} {...props} />
);

export const SubHeader = (props: TypographyProps) => (
  <Typography variant="h6" sx={{ mt: 2, mb: 1 }} {...props} />
);
