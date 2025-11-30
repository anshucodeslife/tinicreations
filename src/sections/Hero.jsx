import React from "react";
import heroBg from "../assets/hero-bg-latest.png";
import heroBgMobile from "../assets/hero-bg-mobile.png";

const Hero = () => (
  <section id="home" className="relative h-[100dvh] flex flex-col justify-center text-white overflow-hidden">
    {/* Mobile Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-[center_top] z-0 md:hidden"
      style={{
        backgroundImage: `url(${heroBgMobile})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* Desktop Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0 hidden md:block"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Content Container */}
    <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full pt-20">
      <div className="max-w-4xl">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-amber-100 tracking-wide">
          Tini Creations
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          Crafting Stories That <br /> <span className="text-white">Inspire and Connect</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-amber-50 mb-10 max-w-2xl leading-relaxed">
          A cinematic, elegant experience blending deep black, gold, and white with modern minimalism and subtle motion.
        </p>

        <a
          href="#gallery"
          className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          View Our Gallery
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
