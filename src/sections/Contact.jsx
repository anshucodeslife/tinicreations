//Commented out Contact form as per request
// import React from "react";
// import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => (
//   <section id="contact" className="py-20 bg-gray-900 text-white">
//     <div className="max-w-7xl mx-auto px-4">

//       <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
//       <p className="text-center text-gray-400 mb-12 text-lg">We’d love to discuss your next project.</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//         <div className="space-y-6">
//           <div className="flex items-start gap-4">
//             <Mail className="text-amber-400" size={26}/>
//             <a href="mailto:contact@tinicreation.com" className="hover:text-amber-400">
//               contact@tinicreation.com
//             </a>
//           </div>

//           <div className="flex items-start gap-4">
//             <Phone className="text-amber-400" size={26}/>
//             <a href="tel:+919833753123" className="hover:text-amber-400">
//               +91 98337 53123
//             </a>
//           </div>

//           <div className="flex items-start gap-4">
//             <MapPin className="text-amber-400" size={26}/>
//             <span>Mumbai, India</span>
//           </div>
//         </div>

//         <form className="space-y-6" onSubmit={e => {e.preventDefault(); alert("Form Submitted (Demo)")}}>
//           <input required placeholder="Your Name" className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700"/>
//           <input required placeholder="Your Email" className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700"/>
//           <textarea required rows="5" placeholder="Your Message" className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700"></textarea>

//           <button className="w-full bg-amber-500 text-black py-3 rounded-lg font-semibold hover:bg-amber-400 transition">
//             Send Message
//           </button>
//         </form>

//       </div>
//     </div>
//   </section>
// );

// export default Contact;


import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Format WhatsApp message
    const whatsappMessage = `Hello Tini Creations 👋,%0A%0AMy name is *${name}* (%20${email}).%0A%0A${message}%0A%0A— Sent via Website Contact Form`;

    // Your WhatsApp number (with country code, no spaces or + signs in URL)
    const phoneNumber = "919833753123";

    // Open WhatsApp in new tab/window
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          We’d love to discuss your next project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-amber-400" size={26} />
              <a
                href="mailto:contact@tinicreations.com"
                className="hover:text-amber-400"
              >
                contact@tinicreations.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-amber-400" size={26} />
              <a href="tel:+919833753123" className="hover:text-amber-400">
                +91 98337 53123
              </a>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-amber-400" size={26} />
              <span>Mumbai, India</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              required
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700"
            />
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg border border-gray-700"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-amber-500 text-black py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
