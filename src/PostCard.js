import React, { useState } from 'react';
import './PostCard.css';
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Button from "@mui/material/Button";

const PostCard = ({ name, profileImage, PostText }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [commented, setCommented] = useState(false);
  const [comments, setComments] = useState(0);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleComment = () => {
    if (!commented) {
      setComments(comments + 1);
    }
    setCommented(!commented);
  };

  return (
    <div className="Post-card">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <div className="Post-content">
        <h3 className="name">{name}</h3>
        <p className="Post-text">{PostText}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={handleLike}
            variant="contained"
            style={{
              backgroundColor: liked ? "#2C2929" : "transparent",
              color: "#FFF9E8",
              padding: "2px", // Smaller padding
              marginRight: "5px", // Space between buttons
              minWidth: "auto",
              width: "fit-content",
              fontSize: "0.8rem", // Smaller font size
            }}
          >
            {liked ? (
              <Favorite style={{ color: "#FF4545", fontSize: "1rem" }} />
            ) : (
              <FavoriteBorder style={{ color: "#FFF9E8", fontSize: "1rem" }} />
            )}
            {likes === 0 ? null : likes}
          </Button>
          <Button
            onClick={handleComment}
            variant="contained"
            style={{
              backgroundColor: commented ? "#2C2929" : "transparent",
              color: "#FFF9E8",
              padding: "2px", // Smaller padding
              minWidth: "auto",
              width: "fit-content",
              fontSize: "0.8rem", // Smaller font size
            }}
          >
            <ChatBubbleOutline style={{ color: "#FFF9E8", fontSize: "1rem" }} />
            {comments === 0 ? null : comments}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
