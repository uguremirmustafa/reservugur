import { Box, Typography } from "@mui/material";
import React from "react";

const FullPageSpinner = () => {
  return (
    <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Typography variant="h1">Loading bitch...!</Typography>
    </Box>
  );
};

export default FullPageSpinner;
