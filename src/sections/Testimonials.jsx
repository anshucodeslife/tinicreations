import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  //commented out company names
  // { text: "Tini Creations delivered beyond expectations!", name: "Marketing Head", company: "Client A" },
  // { text: "A seamless process from concept to delivery.", name: "Brand Manager", company: "Client B" },
  // { text: "The visuals truly elevated our brand presence.", name: "CEO", company: "Client C" },

  {
    text: "Tini Creations delivered beyond expectations!",
    name: "Marketing Head",
  },
  {
    text: "A seamless process from concept to delivery.",
    name: "Brand Manager",
  },
  { text: "The visuals truly elevated our brand presence.", name: "CEO" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Client Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <Quote className="text-amber-400 mb-4" size={40} />
            <p className="text-gray-300 italic mb-6">"{t.text}"</p>
            <h4 className="text-xl font-semibold">{t.name}</h4>
            <p className="text-gray-500">{t.company}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
