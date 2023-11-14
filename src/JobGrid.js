import React from "react";
import TeamJob from "./TeamJob";

function JobGrid() {
  const teamJobs = [
    {
      logo: "team_logos/redbull.jpg",
      url: "https://www.redbullracing.com/int-en/jobs",
      name: "Red Bull",
    },
    {
      logo: "logo2.png",
      url: "https://www.mercedesamgf1.com/careers/vacancies",
      name: "Mercedes",
    },
    {
      logo: "logo3.png",
      url: "https://www.ferrari.com/en-EN/corporate/career",
      name: "Ferrari",
    },
    {
      logo: "logo4.png",
      url: "https://racingcareers.mclaren.com/",
      name: "McLaren",
    },
    {
      logo: "logo5.png",
      url: "https://www.astonmartinf1.com/en-GB/careers",
      name: "Aston Martin",
    },
    {
      logo: "Users/kaladanwuke/Downloads/f1 logos/alpinepng.pngg",
      url: "https://www.alpinecars.com/en/jobs​",
      name: "Alpine",
    },
    {
      logo: "logo7.png",
      url: "https://group.williamsf1.com/careers",
      name: "Williams",
    },
    {
      logo: "logo8.png",
      url: "https://scuderia.alphatauri.com/en/f1-jobs/",
      name: "AlphaTauri",
    },
    {
      logo: "/Users/kaladanwuke/Downloads/f1 logos/Alfa Romeo F1 Logo.png",
      url: "https://www.sauber-group.com/corporate/jobs/",
      name: "Alfa Romeo",
    },
    {
      logo: "logo10.png",
      url: "https://www.haasf1team.com/careers",
      name: "Haas",
    },
  ];

  const rows = [];
  for (let i = 0; i < 5; i++) {
    const cols = [];
    for (let j = 0; j < 2; j++) {
      const teamJob = teamJobs[i * 2 + j];
      cols.push(
        <TeamJob logo={teamJob.logo} url={teamJob.url} name={teamJob.name} />
      );
    }
    rows.push(
      <div key={i} className="row">
        {cols}
      </div>
    );
  }
  <TeamJob
    logo="team_logos/haas.jpeg"
    url="https://www.redbullracing.com/int-en/jobs"
    name="Red Bull"
  ></TeamJob>;
  return <div className="job-grid">{rows}</div>;
}

export default JobGrid;
