import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Content from './Content';
import './App.css'; // Import your CSS file
import './TweetCard.css';
import TweetCard from './TweetCard';

function App() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  const handleTweetSubmit = () => {
    if (newTweet) {
      setTweets([...tweets, newTweet]);
      setNewTweet('');
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/content">Content Page</Link>
            </li>
          </ul>
        </nav>
        <div className="left-sidebar">
          {/* Add profile photo and name */}
        </div>
        <Routes>
          <Route path="/" element={<AppContent tweets={tweets} newTweet={newTweet} setNewTweet={setNewTweet} handleTweetSubmit={handleTweetSubmit} />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <div className="right-sidebar">
          {/* Add filters for tweets */}
        </div>
      </div>
    </Router>
  );
}

function AppContent({ tweets, newTweet, setNewTweet, handleTweetSubmit }) {
  return (
    <div className="main-content">
      <h1>Formula 1 App</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <br />
        <button onClick={handleTweetSubmit}>Tweet</button>
      </div>
      <div>
        <h2>Tweets</h2>
        <ul>
          {tweets.map((tweet, index) => (
            <li key={index}>{tweet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;x