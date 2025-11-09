import React from "react";
import { PenTool, Award, TrendingUp, CheckCircle } from "lucide-react";

const items = [
  { icon: PenTool, title: "Creative Storytelling", desc: "We tell emotionally engaging stories that resonate." },
  { icon: Award, title: "Award-Winning Quality", desc: "Premium-grade production & visual standards." },
  { icon: TrendingUp, title: "Brand Strategy", desc: "We align content directly with brand growth goals." },
  { icon: CheckCircle, title: "Flawless Execution", desc: "From planning to final delivery — perfection at every step." },
];

const Expertise = () => (
  <section id="expertise" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map(item => (
          <div key={item.title} className="flex space-x-4 items-start">
            <div className="bg-gray-800 p-3 rounded-full">
              <item.icon size={28} className="text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
