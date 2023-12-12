import React from "react";
import JobGrid from "./JobGrid";
import FeaturedJobs from "./FeaturedJobs";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import "./Jobs.css"; // Import the newly created CSS file

function Jobs() {
  return (
    <Container>
      <FeaturedJobs />
      <Typography variant="h4" className="heading">
        Job Information
      </Typography>
      <JobGrid />
    </Container>
  );
}

export default Jobs;
