import React from "react";
import { PenTool, Award, TrendingUp, CheckCircle } from "lucide-react";

const items = [
  { icon: PenTool, title: "Creative Storytelling", desc: "We tell emotionally engaging stories that resonate." },
  { icon: Award, title: "Award-Winning Quality", desc: "Premium-grade production & visual standards." },
  { icon: TrendingUp, title: "Brand Strategy", desc: "We align content directly with brand growth goals." },
  { icon: CheckCircle, title: "Flawless Execution", desc: "From planning to final delivery — perfection at every step." },
];

const Expertise = () => (
  <section id="expertise" className="pt-20 pb-32 bg-white text-gray-900 relative z-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map(item => (
          <div key={item.title} className="flex space-x-4 items-start">
            <div className="bg-gray-100 p-3 rounded-full">
              <item.icon size={28} className="text-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Wave Divider */}
    <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-[50px] sm:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#111827" // gray-900
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
);

export default Expertise;
