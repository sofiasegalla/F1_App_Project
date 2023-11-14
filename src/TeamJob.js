import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TeamJob({ logo, url, teamName }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Box
      onClick={handleClick}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar
        src={logo}
        alt={`${teamName} logo`}
        sx={{ width: 50, height: 50, border: "1px solid black" }}
      />
      <Typography variant="body1">{teamName}</Typography>
    </Box>
  );
}

export default TeamJob;
