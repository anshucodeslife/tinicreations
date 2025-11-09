import React from "react";
import { Projector, Calendar, Users, Award } from "lucide-react";

const data = [
  { icon: Projector, value: "150+", label: "Projects Completed" },
  { icon: Calendar, value: "8+", label: "Years Experience" },
  { icon: Users, value: "90+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Awards Won" },
];

const Journey = () => (
  <section id="journey" className="py-20 bg-gray-900 text-white text-center">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12">Our Journey So Far</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map(item => (
          <div key={item.label} className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <item.icon size={48} className="text-amber-400 mx-auto mb-4" />
            <div className="text-5xl font-bold mb-2">{item.value}</div>
            <div className="text-gray-400 text-xl">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Journey;
