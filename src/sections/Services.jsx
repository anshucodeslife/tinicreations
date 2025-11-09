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
  <section id="services" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-xl text-center text-gray-400 mb-12">Full-stack production solutions.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(item => (
          <div key={item.title} className="bg-gray-800 p-8 rounded-lg hover:bg-black border border-gray-700 hover:border-amber-400 transition shadow-lg">
            <item.icon size={50} className="text-amber-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
