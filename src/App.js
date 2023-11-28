import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./PostCard.css";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Container from "@mui/material/Container";
import PostFeed from "./PostFeed";
import RightBar from "./RightBar";
import Content from "./Content";
import Jobs from "./Jobs";

import TopBar from "./TopBar";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <Router>
      <Container
        maxWidth="xl"
        sx={{
          border: 1,
          borderColor: "grey.500",
          backgroundColor: "#2C2929",
          pt: 4,
        }}
      >
        <TopBar />
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ border: 1, borderColor: "grey.500" }}>
            <Sidebar />
          </Grid>
          <Grid item xs={6} sx={{ border: 1, borderColor: "grey.500" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <PostFeed
                    posts={posts}
                    newPost={newPost}
                    setNewPost={setNewPost}
                    handlePostSubmit={handlePostSubmit}
                  />
                }
              />
              <Route path="/content" element={<Content />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </Grid>
          <Grid item xs={3}>
            <RightBar />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
