import React, { useState } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Jobs from "./Jobs";
import "./App.css";
import "./PostCard.css";
import PostCard from "./PostCard";
import ProfileImage from "./f1fan.jpg";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Container from "@mui/material/Container";
import PostFeed from "./PostFeed";
import RightBar from "./RightBar";
import { BrowserRouter as Switch } from "react-router-dom";

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
          backgroundColor: "#4B4645",
          pt: 4,
        }}
      >
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
