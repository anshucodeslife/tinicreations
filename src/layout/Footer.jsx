import React from "react";
import Logo from "../components/Logo";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/tinicreationsofficial/", name: "Instagram" },
    { icon: Twitter, href: "https://x.com/tinicreations", name: "X" },
    { icon: Youtube, href: "https://www.youtube.com/@TiniCreations", name: "YouTube" },
    // { icon: Linkedin, href: "https://linkedin.com/company/tinicreations", name: "LinkedIn" },
    // { icon: Facebook, href: "https://facebook.com/tinicreations", name: "Facebook" },
  ];

  const services = [
    "Ad Film Production",
    "Corporate Films",
    "Concept & Scripting",
    "Post-Production",
    "Digital Content",
    "Still Photography",
  ];

  const links = ["Home", "Gallery", "Process", "Services", "About", "Contact"];

  return (
    <footer className="bg-black border-t border-gray-800 py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Logo />
          <p>Crafting stories that sell. High-quality commercial ad film production.</p>
          <p>Founded by Prashant Pandey</p>

          <div className="flex space-x-5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                aria-label={s.name}
              >
                <div
                  className="p-3 bg-gray-800 rounded-full border border-gray-700 
                  transform transition duration-500 group-hover:rotate-y-180 group-hover:bg-amber-500"
                  style={{
                    perspective: "600px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <s.icon
                    size={20}
                    className="text-gray-300 group-hover:text-black transform transition-transform duration-500"
                  />
                </div>

                {/* Glow / shadow effect */}
                <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 group-hover:bg-amber-400 transition duration-500"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-amber-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl text-white mb-6">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s} className="hover:text-amber-400 cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl text-white mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Mail className="text-amber-400" size={20} />
              <a href="mailto:contact@tinicreations.com">
                contact@tinicreations.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="text-amber-400" size={20} />
              <a href="tel:+918693860500">+91 86938 60500</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="text-amber-400" size={20} />
              Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray-800 mt-12 pt-8 text-sm">
        © {new Date().getFullYear()} Tini Creations. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
