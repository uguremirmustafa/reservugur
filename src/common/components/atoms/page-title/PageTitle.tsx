import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IProps extends TypographyProps {}

const PageTitle = (props: IProps) => {
  const { variant, children, ...rest } = props;
  return (
    <Typography variant="h1" gutterBottom>
      {children}
    </Typography>
  );
};

export default PageTitle;
