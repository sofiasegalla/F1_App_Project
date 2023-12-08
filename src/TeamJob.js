import React from 'react';
import PropTypes from 'prop-types';
import './Jobs.css'; // Import the CSS file

const TeamJob = ({ logo, url, teamName }) => (
  <div className="team-job-item">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="team-job-content">
        <img src={logo} alt={teamName} />
        <p style={{ color: 'white' }}>{teamName}</p>
      </div>
    </a>
  </div>
);

TeamJob.propTypes = {
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default TeamJob;
