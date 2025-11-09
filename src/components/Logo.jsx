import React from "react";
import logo from "../assets/Logo/logo.png"; // ✅ no curly braces needed

const Logo = () => (
  <a href="#home" className="flex items-center space-x-3">
    <img
      src={logo}
      alt="Tini Creations Logo"
      className="w-10 h-10 object-contain"
    />
    <div className="flex flex-col leading-tight">
      <span
        style={{ fontFamily: "'Great Vibes', cursive" }}
        className="text-3xl text-amber-400"
      >
        Tini
      </span>
      <span className="text-sm font-light uppercase text-white opacity-90">
        Creations
      </span>
    </div>
  </a>
);

export default Logo;
