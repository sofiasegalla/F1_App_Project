// TweetCard.js
import React from 'react';
import './TweetCard.css';

const TweetCard = ({ name, profileImage, tweetText }) => {
  return (
    <div className="tweet-card">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="tweet-content">
        <h3 className="name">{name}</h3>
        <p className="tweet-text">{tweetText}</p>
      </div>
    </div>
  );
};

export default TweetCard;
