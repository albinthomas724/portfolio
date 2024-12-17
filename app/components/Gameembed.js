const GameEmbed = () => {
    return (
      <div
        style={{
          position: "relative",
          height: 0,
          overflow: "hidden",
          paddingBottom: "56.25%", // Aspect ratio for responsive embed
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
        >
          Browser not compatible.
        </iframe>
      </div>
    );
  };
  
  export default GameEmbed;
  