import React from "react";

// Import Brand Logos
import guess from "../assets/brands/Guess Watches.png";
import swiss from "../assets/brands/Swiss.png";
import ubon from "../assets/brands/Ubon.png";
import dotAndKey from "../assets/brands/Dot&key.png";
import clovia from "../assets/brands/clovia.png";
import olaplex from "../assets/brands/olaplex.jpg";
import kindda from "../assets/brands/kindda_logo.jpg";
import nineXm from "../assets/brands/9XM_Logo.png";
import syska from "../assets/brands/syska.png";
import akiva from "../assets/brands/akiva.jpg";
import helios from "../assets/brands/helios.jpg";
import bingo from "../assets/brands/bingo.png";
import moj from "../assets/brands/moj.webp";
import incomet from "../assets/brands/incomet.jpg";
import hipi from "../assets/brands/hipi.jpg";
import zee5 from "../assets/brands/Zee5.jpeg";
import oxi9 from "../assets/brands/oxi9.png";
import fairplay from "../assets/brands/fairplay.jpg";
import caspian from "../assets/brands/caspian.png";
import iim from "../assets/brands/iim.png";

const row1 = [
    { name: "Guess", logo: guess },
    { name: "Swiss Military", logo: swiss },
    { name: "Ubon", logo: ubon },
    { name: "Dot & Key", logo: dotAndKey },
    { name: "Clovia", logo: clovia },
    { name: "Olaplex", logo: olaplex },
    { name: "Kindda", logo: kindda },
    { name: "9XM", logo: nineXm },
    { name: "Syska", logo: syska },
    { name: "Akiva Love", logo: akiva },
];

const row2 = [
    { name: "Helios", logo: helios },
    { name: "Bingo", logo: bingo },
    { name: "Moj", logo: moj },
    { name: "Incomet", logo: incomet },
    { name: "Hipi", logo: hipi },
    { name: "Zee5", logo: zee5 },
    { name: "Oxi9", logo: oxi9 },
    { name: "Fairplay", logo: fairplay },
    { name: "Caspian", logo: caspian },
    { name: "IIM Indore", logo: iim },
];

const Clients = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h2 className="text-4xl font-bold text-center text-gray-900">Our Clients</h2>
            </div>

            <div className="flex flex-col gap-12">
                {/* Row 1 - Left to Right (Standard Marquee) */}
                <div className="relative w-full overflow-hidden hover:pause group">
                    <div className="flex w-max animate-scroll-left group-hover:pause">
                        {[...row1, ...row1].map((brand, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex items-center justify-center mx-8 w-32 h-20 transition-all duration-300 transform hover:scale-110"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Right to Left (Reverse Marquee) */}
                <div className="relative w-full overflow-hidden hover:pause group">
                    <div className="flex w-max animate-scroll-right group-hover:pause">
                        {[...row2, ...row2].map((brand, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex items-center justify-center mx-8 w-32 h-20 transition-all duration-300 transform hover:scale-110"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
