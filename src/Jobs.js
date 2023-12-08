import React from "react";
import JobGrid from "./JobGrid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import "./Jobs.css"; // Import the newly created CSS file

function Jobs() {
  return (
    <Container>
      <Typography variant="h3" className="heading">Job Information</Typography> 
      <JobGrid />
    </Container>
  );
}

export default Jobs;
