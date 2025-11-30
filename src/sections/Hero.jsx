import React from "react";
import heroBg from "../assets/hero-bg-latest.png";

const Hero = () => (
  <section id="home" className="relative h-screen flex flex-col justify-center text-white overflow-hidden bg-[#E86C1F]">
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
          className="inline-block bg-white text-[#E86C1F] font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          View Our Gallery
        </a>
      </div>
    </div>

    {/* Curved Divider & Image Container */}
    <div className="absolute bottom-0 left-0 w-full h-[45%] z-10">
      {/* Curve SVG */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px] md:h-[150px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* White curve to match reference style roughly, or just use the image shape */}
          {/* Actually, the reference has a white shape. I'll add a white curve separator. */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#E86C1F]"
          ></path>
        </svg>
      </div>

      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  </section>
);

export default Hero;
