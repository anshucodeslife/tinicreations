import React, { useState, useRef } from "react";

const VideoCard = ({ videoId, title, className = "", children }) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const iframeRef = useRef(null);

  const handleMouseEnter = () => {
    if (!isInteractive && iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: [] }),
        "*"
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    }
  };

  const handleMouseLeave = () => {
    if (!isInteractive && iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute", args: [] }),
        "*"
      );
    }
  };

  const handleClick = () => {
    setIsInteractive(true);
  };

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <iframe
        ref={iframeRef}
        className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${
          isInteractive ? "pointer-events-auto" : "pointer-events-none"
        }`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Overlay to capture hover/click when not interactive */}
      {!isInteractive && (
        <div className="absolute inset-0 z-10 cursor-pointer bg-transparent">
          {/* Optional: Add a subtle hint like "Click to Control" if needed */}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default VideoCard;
