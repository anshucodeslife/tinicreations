import React from "react";
import logo from "../assets/Logo/logo.png";

const Logo = ({ isScrolled }) => (
    <a href="#home" className="flex items-center gap-3 group">
        <img
            src={logo}
            alt="Tini Creations Logo"
            className="w-12 h-12 object-contain transition-transform duration-300 md:group-hover:scale-110"
        />
        <div className="flex flex-col justify-center">
            <span
                style={{ fontFamily: "'Great Vibes', cursive" }}
                className="text-4xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-sm"
            >
                Tini
            </span>
            <span
                style={{ fontFamily: "'Cinzel', serif" }}
                className={`text-[0.65rem] font-bold uppercase tracking-[0.3em] leading-tight ml-1 transition-colors duration-300 ${isScrolled === false ? "text-black" : "text-gray-200"
                    }`}
            >
                Creations
            </span>
        </div>
    </a>
);

export default Logo;
