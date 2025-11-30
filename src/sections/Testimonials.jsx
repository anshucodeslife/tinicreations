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
  <section id="testimonials" className="relative pt-32 pb-32 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 text-white z-10">
    {/* Background & Decor Container - Handles Overflow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
    </div>

    {/* Top Wave Divider */}
    <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
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
          transform="scale(1, -1) translate(0, -320)" // Flip vertically for top
        ></path>
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-md">
        Client Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-900/20 border border-white/50"
          >
            <Quote className="text-amber-500 mb-6" size={48} />
            <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
              "{t.text}"
            </p>
            <div>
              <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
              {t.company && (
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
                  {t.company}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Wave Divider */}
    <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
      <svg
        className="relative block w-full h-[50px] sm:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
);

export default Testimonials;
