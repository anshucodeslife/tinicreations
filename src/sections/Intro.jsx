import React from "react";

const Intro = () => (
  <section id="intro" className="relative pt-20 pb-32 bg-black text-white text-center z-50">
    <div className="max-w-3xl mx-auto px-4 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Leading Ad Film Production Company in Mumbai
      </h2>
      <p className="text-lg md:text-xl text-gray-300">
        We specialize in high-quality ad films, digital commercials & branding visuals that captivate audiences and elevate brands.
      </p>
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

export default Intro;
