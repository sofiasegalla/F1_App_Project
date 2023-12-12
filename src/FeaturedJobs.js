import React from "react";
import TeamJob from "./TeamJob";
import alpinelogo from "./team_logos/alpinepng.png";
import williamslogo from "./team_logos/Logo Williams F1.png";
import haasLogo from "./team_logos/Haas F1 Logo.jpg";
import romeoLogo from "./team_logos/Alfa Romeo F1 Logo.png";
import mercedezLogo from "./team_logos/mercedez-logo.jpeg";
import martinLogo from "./team_logos/amartin-logo.jpeg";
import ferrariLogo from "./team_logos/ferrarilogo.png";
import tauriLogo from "./team_logos/AlphaTauri F1 Logo.png";
import mclarenLogo from "./team_logos/maclaren-logo.png";
import redbullLogo from "./team_logos/Red Bull Racing Logo.jpg";
import Grid from "@mui/material/Grid";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FlagIcon from "@mui/icons-material/Flag";

function FeaturedJobs() {
  const jobs = [
    {
      logo: redbullLogo,
      url: "https://redbulltechnology.wd3.myworkdayjobs.com/RB_Racing/job/Milton-Keynes/Senior-Electronics-Engineer_R0002531",
      name: "Senior Electronics Engineer",
      location: "Milton Keynes, UK",
    },
    {
      logo: mercedezLogo,
      url: "https://www.mercedesamgf1.com/careers/vacancies/REQ-230433",
      name: "Dyno Systems Engineer",
      location: "Brackley, UK",
    },
    {
      logo: ferrariLogo,
      url: "https://jobs.ferrari.com/job/Maranello-Supply-Chain-Engineer-Internship-%28Maranello%29/961343055/",
      name: "Supply Chain Engineer Internship",
      location: "Maranello, Italy",
    },
    {
      logo: mclarenLogo,
      url: "https://racingcareers.mclaren.com/o/phd-intern-cfd-rd-1",
      name: "R&D Internship",
      location: "Woking, UK",
    },
  ];

  const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#4B4645",
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(2),
  }));

  const CustomCardContent = styled(CardContent)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const JobTitle = styled(Typography)({
    fontWeight: "bold",
  });

  const CountryBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });

  const JobCard = ({ logo, url, name, location }) => {
    return (
      <CustomCard>
        <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
          <CustomCardContent>
            <Box>
              <JobTitle variant="h6">{name}</JobTitle>
              <Typography variant="subtitle2" color="lightGray">
                {location}
              </Typography>
            </Box>
            <CountryBox>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "80px", height: "65px" }}
              />
            </CountryBox>
          </CustomCardContent>
        </CardActionArea>
      </CustomCard>
    );
  };

  return (
    <Container>
      <Typography
        variant="h4"
        className="heading"
        style={{ marginBottom: "20px" }}
      >
        Featured Jobs
      </Typography>
      {jobs.map((job) => (
        <JobCard
          key={job.name}
          logo={job.logo}
          url={job.url}
          name={job.name}
          location={job.location}
        />
      ))}
    </Container>
  );
}

export default FeaturedJobs;
