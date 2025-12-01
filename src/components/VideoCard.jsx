import React, { useState, useRef } from "react";
import { Volume2, VolumeX, MousePointerClick } from "lucide-react";

const VideoCard = ({ videoId, title, className = "", children }) => {
  const [isInteractive, setIsInteractive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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
      setIsMuted(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isInteractive && iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute", args: [] }),
        "*"
      );
      setIsMuted(true);
    }
  };

  const handleClick = () => {
    setIsInteractive(true);
    setIsMuted(false); // Ensure it stays unmuted
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
          {/* Visual Feedback Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
            
            {/* Top Right: Click to Control Hint */}
            <div className="self-end bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-2 transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
              <MousePointerClick size={14} />
              <span>Click to Control</span>
            </div>

            {/* Bottom Right: Volume Indicator */}
            <div className="self-end bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transform translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </div>
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default VideoCard;
