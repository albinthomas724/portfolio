"use client"
import React, { useState, useEffect } from 'react';

const GameEmbed = () => {
  const [isGameAvailable, setIsGameAvailable] = useState(true);

  useEffect(() => {
    // Check if the game is available by testing the iframe src
    const iframe = document.createElement('iframe');
    iframe.src = "https://idev.games/embed/narrow-escape";
    iframe.onload = () => setIsGameAvailable(true);
    iframe.onerror = () => setIsGameAvailable(false);
  }, []);

  if (!isGameAvailable) {
    // If the game is not available, do not render the component
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        height: 0,
        overflow: "hidden",
        paddingBottom: "56.25%", // Aspect ratio for responsive embed (16:9)
        backgroundColor: "white", // Set the background color to white
      }}
    >
      <iframe
        id="embededGame"
        src="https://idev.games/embed/narrow-escape"
        scrolling="no"
        seamless="seamless"
        frameBorder="0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title="Game Embed"
      >
        Browser not compatible.
      </iframe>
    </div>
  );
};

export default GameEmbed;
