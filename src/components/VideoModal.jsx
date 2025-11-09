import React from "react";
import { PlayCircle, X } from "lucide-react";

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex justify-center items-center p-4" onClick={onClose}>
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-xl"
      >
        <button 
          onClick={onClose}
          className="absolute -top-5 -right-5 bg-white text-black rounded-full p-2 shadow-lg hover:bg-amber-400 transition"
        >
          <X size={22}/>
        </button>

        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white">
            <PlayCircle size={64} className="text-amber-400 mx-auto mb-4"/>
            <h2 className="text-3xl font-bold">{video.title}</h2>
            <p className="text-gray-400">{video.client}</p>
            <p className="text-sm mt-4">(Video Preview Placeholder)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
