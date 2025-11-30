import React from "react";
import creative from "../assets/creative.png";

const CreativeAdFilm = () => (
  <section id="creative" className="pt-20 pb-32 bg-black text-white relative z-30">
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

    {/* Bottom Wave Divider */}
    <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-[50px] sm:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
);

export default CreativeAdFilm;
