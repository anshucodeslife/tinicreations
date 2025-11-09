import React from "react";
import { Lightbulb, Camera, Edit3, Clapperboard } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Script & Concept", desc: "We turn your brand message into a compelling idea." },
  { icon: Clapperboard, title: "Pre-Production", desc: "Casting, scripting, planning & everything in between." },
  { icon: Camera, title: "Production", desc: "Filming with premium equipment & experienced crew." },
  { icon: Edit3, title: "Post-Production", desc: "Editing, color grading, VFX & final delivery." },
];

const Process = () => (
  <section id="process" className="py-20 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">From Script to Screen</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(step => (
          <div key={step.title} className="bg-gray-900 border border-gray-800 p-8 rounded-lg text-center shadow-lg">
            <step.icon className="text-amber-400 mx-auto mb-6" size={48} />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
