import React from "react";
import JobGrid from "./JobGrid";
import TeamJob from "./TeamJob";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function Jobs() {
  return (
    <Container>
      <Typography variant="h3">Jobs</Typography>
      <JobGrid />
    </Container>
  );
}

export default Jobs;
