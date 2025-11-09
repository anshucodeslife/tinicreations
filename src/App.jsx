import React, { useState, useEffect } from "react";
import LoadFonts from "./components/LoadFonts";
import Header from "./components/Header";
import Footer from "./layout/Footer";
import VideoModal from "./components/VideoModal";
import FadeInSection from "./components/FadeInSection";

import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Gallery from "./sections/Gallery";
import Process from "./sections/Process";
import Services from "./sections/Services";
import CreativeAdFilm from "./sections/CreativeAdFilm";
import Expertise from "./sections/Expertise";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="bg-black">
      <LoadFonts />
      <Header />
      {/* V1 TiniCreations component */}
      {/* <TiniCreations/>   */}
      <main>
        <Hero />
        <FadeInSection>
          <Intro />
        </FadeInSection>
        <FadeInSection>
          <Gallery onVideoSelect={setSelectedVideo} />
        </FadeInSection>
        <FadeInSection>
          <Process />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <CreativeAdFilm />
        </FadeInSection>
        <FadeInSection>
          <Expertise />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        {/* <FadeInSection>
          <Journey />
        </FadeInSection> */}
        {/* <FadeInSection>
          <Team />
        </FadeInSection> */}
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>

      <Footer />
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
