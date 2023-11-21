import React, { useState } from "react";
import ProfileImage from "./f1fan.jpg";
import PostCard from "./PostCard";
import { Box, TextField, Button, Avatar, Grid , withStyles} from "@mui/material";
import styles from "./PostCard.css";

function PostFeed({ posts, newPost, setNewPost, handlePostSubmit }) {
  return (
    <Box className="main-content">
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item>
          <Avatar src={ProfileImage} alt="Your Profile" />
        </Grid>
        <Grid item xs={12} sm>
          <TextField 
            multiline
            rows={3}
            placeholder="What's happening?"
            inputProps={{ style: { color: "#FFF9E8" }}}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              "& fieldset": { 
                borderWidth: 0.75,
                borderColor: "#FFF9E8",
                opacity: 0.6 },
            }}
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              onClick={handlePostSubmit}
              variant="contained"
              sx={{
                borderRadius: 50,
                backgroundColor: "#FF4545",
                "&:hover": { backgroundColor: "#FF4545" },
              }}
            >
              Post
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <h2 className="Post-header">Posts</h2>
        <ul>
          {posts &&
            posts.map((post, index) => (
              <PostCard
                key={index}
                name="@chadsobies"
                profileImage={ProfileImage}
                PostText={post}
              />
            ))}
        </ul>
      </Box>
    </Box>
  );
}

export default PostFeed;
