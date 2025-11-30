import React from "react";
import founder from "../assets/Prashant-Pandey.png"; // ✅ Remove curly braces

const About = () => (
  <section id="about" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div>
        <h2 className="text-4xl font-bold mb-6">About Tini Creations</h2>

        <p className="text-lg text-gray-300 mb-4">
          Founded by{" "}
          <span className="text-amber-400 font-medium">Prashant Pandey</span>, Tini Creations is built on a passion for cinematic storytelling and brand-focused creativity.
        </p>

        <p className="text-lg text-gray-300 mb-6">
          Our mission: craft beautiful, powerful ad films that inspire emotion and drive real brand results.
        </p>

        <a
          href="#contact"
          className="bg-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
        >
          Let's Create Together
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src={founder}
          className="rounded-xl shadow-2xl w-full max-w-[350px] h-auto object-cover border-4 border-gray-800"
          alt="Founder - Prashant Pandey"
        />
      </div>

    </div>
  </section>
);

export default About;
