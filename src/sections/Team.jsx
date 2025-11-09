import React from "react";

const members = [
  { name: "Prashant Pandey", role: "Founder & Director", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&w=500&q=80" },
  { name: "Jane Doe", role: "Lead Producer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&w=500&q=80" },
  { name: "John Smith", role: "Director of Photography", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=500&q=80" },
];

const Team = () => (
  <section id="team" className="py-20 bg-black text-white text-center">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12">Meet Our Core Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {members.map(m => (
          <div key={m.name} className="space-y-4">
            <img src={m.img} className="rounded-lg shadow-lg w-full" />
            <h3 className="text-2xl font-semibold">{m.name}</h3>
            <p className="text-amber-400">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
