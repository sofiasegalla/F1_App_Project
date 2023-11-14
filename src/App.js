import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Jobs from "./Jobs";
import "./App.css";
import "./PostCard.css";
import PostCard from "./PostCard";
import ProfileImage from "./f1fan.jpg";

function App() {
  const [Posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost) {
      setPosts([...Posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="header">
          <h1>Poster</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </nav>
        <div className="left-sidebar">
          <div className="profile-info">
            <img
              src="your-profile-image.jpg"
              alt="Your Profile"
              className="profile-image"
            />
            <h2>Your Name</h2>
            <p>@yourusername</p>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <AppContent
                Posts={Posts}
                newPost={newPost}
                setNewPost={setNewPost}
                handlePostSubmit={handlePostSubmit}
              />
            }
          />
          <Route path="/content" element={<Content />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
        <div className="right-sidebar">
          <div className="search">
            <input type="text" placeholder="Search Twitter" />
          </div>
          <div className="trending">
            <h2>Trending</h2>
            <ul>
              <li>#Topic1</li>
              <li>#Topic2</li>
              <li>#Topic3</li>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

function AppContent({ Posts, newPost, setNewPost, handlePostSubmit }) {
  return (
    <div className="main-content">
      <div className="Post-box">
        <img src={ProfileImage} alt="Your Profile" className="profile-image" />
        <textarea
          rows="4"
          cols="50"
          placeholder="What's happening?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {Posts.map((Post, index) => (
            <PostCard
              key={index}
              name="F1 Fan 2001 @f1fanuser1"
              profileImage={ProfileImage}
              PostText={Post}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
