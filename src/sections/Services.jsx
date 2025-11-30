import React from "react";
import { VideoIcon, Layers, FileText, Edit3, MonitorPlay, Image as ImageIcon } from "lucide-react";

const services = [
  { icon: VideoIcon, title: "Ad Film Production", desc: "Impactful commercials for TV & digital." },
  { icon: Layers, title: "Corporate Films", desc: "Professional cinematic brand storytelling." },
  { icon: FileText, title: "Concept & Scripting", desc: "Strong messaging through narrative." },
  { icon: Edit3, title: "Post-Production", desc: "Editing, color grading, sound & VFX." },
  { icon: MonitorPlay, title: "Digital Content", desc: "Engaging visuals for social platforms." },
  { icon: ImageIcon, title: "Still Photography", desc: "Campaign shoots & product visuals." },
];

const Services = () => (
  <section id="services" className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
    {/* Subtle Creative Gradient Overlay */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Our Services
      </h2>
      <p className="text-xl text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Full-stack production solutions tailored for impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item) => (
          <div
            key={item.title}
            className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors duration-300">
              <item.icon
                size={32}
                className="text-gray-300 group-hover:text-amber-400 transition-colors duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
