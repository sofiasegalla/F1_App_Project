import React, { useState, useEffect } from 'react';
import './Content.css'; // Import your CSS file

const videos = [
  { title: 'My Job in F1: Katherine | Graphic Designer', thumbnail: '/Katherine.png', url: 'https://www.youtube.com/watch?v=ebKwx9L9gWs', postedBy: 'F1 Channel' },
  { title: 'A Day In the Life of a McLaren Formula 1 Videographer', thumbnail: '/f1ditl.png', url: 'https://www.youtube.com/watch?v=7JFJH4US6Lo2', postedBy: 'McLaren F1 Team' },
  { title: 'Beginner Guide to F1', thumbnail: '/f1bg.png', url: 'https://www.youtube.com/watch?v=Q-jjZMMxbZs', postedBy: 'F1 Enthusiast' },
  { title: 'Never Have I Ever With Our 2023 F1 Drivers! | Episode 1', thumbnail: '/f1nihe.png', url: 'https://www.youtube.com/watch?v=2tFDzzoa8RM', postedBy: 'F1 Insider' },
  { title: 'Max on Red Bull’s Changes - Opinion', thumbnail: '/maxv.png', url: 'https://www.formula1.com/en/latest/article.its-a-big-area-to-improve-verstappen-reveals-how-red-bull-can-get-even.6vJAo5uol0FbS2XF9ifCNa.html', postedBy: 'Red Bull Racing' },
  { title: 'Formula 1’s Highest-Paid Drivers 2023', thumbnail: '/forbes.png', url: 'https://www.youtube.com/watch?v=X19hyaIh1Bw', postedBy: 'Forbes Sports' },
  { title: 'F1 continues dismantling track in Las Vegas', thumbnail: '/f1tracks.png', url: 'https://www.youtube.com/watch?v=lDSngw9bNrU', postedBy: 'F1 Updates' },
  // Add more videos as needed
];

const Video = ({ video }) => (
  <div className="video">
    <div className="video-box">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnail} alt={video.title} />
        <p>{video.title}</p>
      </a>
      <p className="posted-by">Posted by {video.postedBy}</p>
    </div>
  </div>
);

const Content = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // Calculate the time remaining until the next F1 race
    const nextRaceDate = new Date('2024-02-29T14:00:00Z');
    const currentTime = new Date();
    const timeRemaining = nextRaceDate - currentTime;

    // Update the countdown every second
    const interval = setInterval(() => {
      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      setCountdown(daysRemaining);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Redirect to the desired URL
    window.location.href = 'https://www.formula1.com/en/latest/article.formula-1-announces-calendar-for-2024.XL3c5Cxi0ZOQzPrUu5izL.html';
  };

  return (
    <div>
      <h2 style={{ color: '#FFF9E8' }}>Trending Content</h2>
      <div className="bubble-box">
        <h3 style={{ color: '#FFF9E8' }}>Countdown to Next race:</h3>
        <button onClick={handleClick} className="countdown-button">
          {countdown} days
        </button>
      </div>
      <div className="video-grid">
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Content;
