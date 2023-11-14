import React from "react";

function TeamJob({ logo, url, teamName }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleClick}>
      <img src={logo} alt={`${teamName} logo`} width="25" height="25" />
      <p>{teamName}</p>
    </div>
  );
}

export default TeamJob;
