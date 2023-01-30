import React from "react";
import { Typography } from "@mui/material";

export default {
  title: "Mui/Typography",
  component: Typography,
};

export const Default = () => <Typography>Typography</Typography>;
export const Header1GutterOn = () => (
  <Typography variant="h1" gutterBottom>
    h1 Heading
  </Typography>
);
export const Header2 = () => <Typography variant="h2">h2 Heading</Typography>;
export const Header3 = () => <Typography variant="h3">h3 Heading</Typography>;
export const Header4 = () => <Typography variant="h4">h4 Heading</Typography>;
export const Header5 = () => <Typography variant="h5">h5 Heading</Typography>;
export const Header6 = () => <Typography variant="h6">h6 Heading</Typography>;
export const SubTitle1 = () => (
  <Typography variant="subtitle1">Sub title 1</Typography>
);
