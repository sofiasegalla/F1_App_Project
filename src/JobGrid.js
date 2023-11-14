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

function JobGrid() {
  const teamJobs = [
    {
      logo: redbullLogo,
      url: "https://www.redbullracing.com/int-en/jobs",
      name: "Red Bull",
    },
    {
      logo: mercedezLogo,
      url: "https://www.mercedesamgf1.com/careers/vacancies",
      name: "Mercedes",
    },
    {
      logo: ferrariLogo,
      url: "https://www.ferrari.com/en-EN/corporate/career",
      name: "Ferrari",
    },
    {
      logo: mclarenLogo,
      url: "https://racingcareers.mclaren.com/",
      name: "McLaren",
    },
    {
      logo: martinLogo,
      url: "https://www.astonmartinf1.com/en-GB/careers",
      name: "Aston Martin",
    },
    {
      logo: alpinelogo,
      url: "https://www.alpinecars.com/en/jobs​",
      name: "Alpine",
    },
    {
      logo: williamslogo,
      url: "https://group.williamsf1.com/careers",
      name: "Williams",
    },
    {
      logo: tauriLogo,
      url: "https://scuderia.alphatauri.com/en/f1-jobs/",
      name: "AlphaTauri",
    },
    {
      logo: romeoLogo,
      url: "https://www.sauber-group.com/corporate/jobs/",
      name: "Alfa Romeo",
    },
    {
      logo: haasLogo,
      url: "https://www.haasf1team.com/careers",
      name: "Haas",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ pt: 5 }}>
      {teamJobs.map((teamJob) => (
        <Grid item xs={12} sm={6} md={3}>
          <TeamJob
            logo={teamJob.logo}
            url={teamJob.url}
            teamName={teamJob.name}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default JobGrid;
