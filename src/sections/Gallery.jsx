import React from "react";
import VideoCard from "../components/VideoCard";
import gaanaLogo from "../assets/gaana-logo.png";
import happnLogo from "../assets/happn-logo.png";
import inacanLogo from "../assets/inacan-logo.png";

const Gallery = () => {
  // Video IDs
  const mainVideoId = "ouJasJT4dXI";
  const gridVideos = [
    { id: 1, videoId: "EK7un_6zZvg", title: "Video 1" },
    { id: 2, videoId: "2qboAW--DIM", title: "Video 2" },
    { id: 3, videoId: "46VZ-3yewZM", title: "Video 3" },
    { id: 4, videoId: "JMkYZnCzJpw", title: "Video 4" },
  ];

  return (
    <section id="gallery" className="pt-20 pb-32 bg-white text-gray-900 relative z-40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Gallery</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          We create visuals that speak louder than words.
        </p>

        {/* Main Featured Video - Our Show Reel */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
            Our Show Reel
          </h3>
          <VideoCard
            videoId={mainVideoId}
            title="Our Show Reel"
            className="w-full pt-[56.25%] rounded-xl shadow-2xl border border-gray-200"
          />
        </div>

        {/* Commercial Ads Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-700">
            TV Commercials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "comm1", videoId: "Ea-e0UwwJkw", title: "Gaana App", brand: "Gaana App", logo: gaanaLogo },
              { id: "comm2", videoId: "VSx8nysBJ1o", title: "happn App", brand: "happn App", logo: happnLogo },
              { id: "comm3", videoId: "ar7zn8c9N1w", title: "IN A CAN", brand: "IN A CAN", logo: inacanLogo },
            ].map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <VideoCard
                  videoId={item.videoId}
                  title={item.title}
                  className="w-full pt-[56.25%] rounded-lg shadow-xl border border-gray-200"
                />
                <div className="flex items-center gap-3 px-2">
                  {/* Logo Image */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm p-1">
                    <img src={item.logo} alt={item.brand} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{item.brand}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">TV Commercial</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Videos - Our Influencer Brand IG Horizontal Post */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700">
            Our Influencer Brand IG Horizontal Post
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {gridVideos.map((item) => (
              <VideoCard
                key={item.id}
                videoId={item.videoId}
                title={item.title}
                className="w-full pt-[56.25%] rounded-lg shadow-xl border border-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Influencer & Brand Integration Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
            Influencer & Brand Integration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { id: "inf1", videoId: "u22Cc3mtR3o", title: "Influencer Integration 1" },
              { id: "inf2", videoId: "kvj-GvxfPOw", title: "Influencer Integration 2" },
            ].map((item) => (
              <VideoCard
                key={item.id}
                videoId={item.videoId}
                title={item.title}
                className="w-full pt-[56.25%] rounded-lg shadow-xl border border-gray-200"
              />
            ))}
          </div>
        </div>

        {/* YouTube Shorts Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700">
            Vertical Ad Films
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["YEpwC0A7jfQ", "GB_KQJ19HaA", "TV4fzsMJFg0", "M1B72D5QNk4"].map((shortId, index) => (
              <VideoCard
                key={shortId}
                videoId={shortId}
                title={`Short ${index + 1}`}
                className="w-full pt-[177.77%] rounded-[2rem] shadow-2xl border-8 border-gray-800 bg-black"
              >
                {/* Phone Notch/Header decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-20 pointer-events-none"></div>
              </VideoCard>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[50px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Gallery;
