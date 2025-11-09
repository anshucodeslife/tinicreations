import React from "react";
import creative from "../assets/creative.png";

const CreativeAdFilm = () => (
  <section id="creative" className="py-20 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <img
        src={creative}
        className="rounded-lg shadow-2xl"
        alt="Creative Production"
      />

      <div>
        <h2 className="text-4xl font-bold mb-6">Creative Ad Film Production House</h2>
        <p className="text-gray-300 mb-4">
          We merge innovative ideas with cinematic excellence to create ad films that leave lasting impressions.
        </p>
        <p className="text-gray-300 mb-6">
          Every brand has a story. We ensure yours stands out.
        </p>
        <a href="#gallery" className="text-amber-400 hover:translate-x-2 inline-block transition">
          See Our Work →
        </a>
      </div>
    </div>
  </section>
);

export default CreativeAdFilm;
