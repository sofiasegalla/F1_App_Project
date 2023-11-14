import React, { useState } from "react";
import ProfileImage from "./f1fan.jpg";
import PostCard from "./PostCard";
import { Box, TextField, Button, Avatar, Grid } from "@mui/material";

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
            rows={4}
            placeholder="What's happening?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            variant="outlined"
            fullWidth
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
        <h2>Posts</h2>
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
