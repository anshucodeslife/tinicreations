import React, { useState } from "react";
import gaanaLogo from "../assets/gaana-logo.png";
import happnLogo from "../assets/happn-logo.png";
import inacanLogo from "../assets/inacan-logo.png";

const Gallery = () => {
  const [isMainVideoMuted, setIsMainVideoMuted] = useState(true);

  // Video IDs
  const mainVideoId = "ouJasJT4dXI";
  const gridVideos = [
    { id: 1, videoId: "EK7un_6zZvg", title: "Video 1" },
    { id: 2, videoId: "2qboAW--DIM", title: "Video 2" },
    { id: 3, videoId: "46VZ-3yewZM", title: "Video 3" },
    { id: 4, videoId: "JMkYZnCzJpw", title: "Video 4" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Gallery</h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          We create visuals that speak louder than words.
        </p>

        {/* Main Featured Video - Our Show Reel */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
            Our Show Reel
          </h3>
          <div
            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800 group"
            onMouseEnter={() => setIsMainVideoMuted(false)}
            onMouseLeave={() => setIsMainVideoMuted(true)}
          >
            <iframe
              className="w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=${isMainVideoMuted ? 1 : 0}&controls=0&loop=1&playlist=${mainVideoId}&rel=0&modestbranding=1`}
              title="Our Show Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ pointerEvents: "none" }} // Prevent direct interaction with iframe to ensure hover works on wrapper
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {isMainVideoMuted ? "Hover to Unmute" : "Sound On"}
            </div>
          </div>
        </div>

        {/* Commercial Ads Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
            TV Commercials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "comm1", videoId: "Ea-e0UwwJkw", title: "Gaana App", brand: "Gaana App", logo: gaanaLogo },
              { id: "comm2", videoId: "VSx8nysBJ1o", title: "happn App", brand: "happn App", logo: happnLogo },
              { id: "comm3", videoId: "ar7zn8c9N1w", title: "IN A CAN", brand: "IN A CAN", logo: inacanLogo },
            ].map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div
                  className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-800"
                >
                  <iframe
                    className="w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&rel=0&modestbranding=1`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ pointerEvents: "none" }}
                  ></iframe>
                </div>
                <div className="flex items-center gap-3 px-2">
                  {/* Logo Image */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-600 shadow-inner p-1">
                    <img src={item.logo} alt={item.brand} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight">{item.brand}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">TV Commercial</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Videos - Our Influencer Brand IG Horizontal Post */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Influencer Brand IG Horizontal Post
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {gridVideos.map((item) => (
              <div
                key={item.id}
                className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-800"
              >
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&rel=0&modestbranding=1`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: "none" }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Influencer & Brand Integration Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Influencer & Brand Integration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { id: "inf1", videoId: "u22Cc3mtR3o", title: "Influencer Integration 1" },
              { id: "inf2", videoId: "kvj-GvxfPOw", title: "Influencer Integration 2" },
            ].map((item) => (
              <div
                key={item.id}
                className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-800"
              >
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&rel=0&modestbranding=1`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: "none" }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Shorts Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
            Vertical Ad Films
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["YEpwC0A7jfQ", "GB_KQJ19HaA", "TV4fzsMJFg0", "M1B72D5QNk4"].map((shortId, index) => (
              <div
                key={shortId}
                className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-800 bg-black"
              >
                {/* Phone Notch/Header decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10"></div>

                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${shortId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${shortId}&rel=0&modestbranding=1`}
                  title={`Short ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: "none" }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
