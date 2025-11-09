import React from "react";

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2069&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>

    <div className="relative z-10 p-4 max-w-3xl">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
        We Craft <span className="text-amber-400">Stories</span> That Sell.
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
        High-quality commercial ad film and production company dedicated to bringing your brand's vision to life.
      </p>

      <a
        href="#gallery"
        className="inline-block bg-amber-500 text-black font-semibold py-3 px-10 rounded-lg hover:bg-amber-400 transition-transform duration-300 hover:scale-110"
      >
        View Our Gallery
      </a>
    </div>
  </section>
);

export default Hero;
