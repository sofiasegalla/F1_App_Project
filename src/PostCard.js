// PostCard.js
import React from 'react';
import './PostCard.css';

const PostCard = ({ name, profileImage, PostText }) => {
  return (
    <div className="Post-card">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="Post-content">
        <h3 className="name">{name}</h3>
        <p className="Post-text">{PostText}</p>
      </div>
    </div>
  );
};

export default PostCard;
