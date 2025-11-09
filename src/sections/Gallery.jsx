import React, { useState } from "react";
import { PlayCircle } from "lucide-react";

const Gallery = ({ onVideoSelect }) => {
  const [activeTab, setActiveTab] = useState("all");

  const portfolio = [
    {
      id: 1,
      title: "Brand Anthem",
      // client: "Client A",
      category: "tv",
      thumbnail:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&w=600&q=80",
    },
    {
      id: 2,
      title: "Product Launch",
      // client: "Client B",
      category: "digital",
      thumbnail:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&w=600&q=80",
    },
    {
      id: 3,
      title: "Corporate Film",
      // client: "Client C",
      category: "corporate",
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=600&q=80",
    },
    {
      id: 4,
      title: "TV Commercial",
      // client: "Client D",
      category: "tv",
      thumbnail:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&w=600&q=80",
    },
    {
      id: 5,
      title: "Digital Ad",
      // client: "Client E",
      category: "digital",
      thumbnail:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&w=600&q=80",
    },
    {
      id: 6,
      title: "Social Media",
      // client: "Client F",
      category: "digital",
      thumbnail:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&w=600&q=80",
    },
    {
      id: 7,
      title: "Product Shoot",
      // client: "Client G",
      category: "stills",
      thumbnail:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&w=600&q=80",
    },
    {
      id: 8,
      title: "Campaign Still",
      // client: "Client H",
      category: "stills",
      thumbnail:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&w=600&q=80",
    },
  ];

  const tabs = [
    { id: "all", name: "All" },
    { id: "tv", name: "TV Commercials" },
    { id: "digital", name: "Digital Ads" },
    { id: "corporate", name: "Corporate Films" },
    { id: "stills", name: "Stills & Posts" },
  ];

  const filtered =
    activeTab === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Gallery</h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          We create visuals that speak louder than words.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 border-b-2 text-lg ${
                activeTab === tab.id
                  ? "text-amber-400 border-amber-400"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-lg overflow-hidden shadow-xl cursor-pointer"
              onClick={() => onVideoSelect(item)}
            >
              <img
                src={item.thumbnail}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 flex justify-center items-center transition">
                <PlayCircle
                  size={60}
                  className="opacity-0 group-hover:opacity-100 text-white transition"
                />
              </div>
              <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-amber-400 text-sm">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
