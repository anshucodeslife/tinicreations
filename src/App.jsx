import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadFonts from "./components/LoadFonts";
import Header from "./components/Header";
import Footer from "./layout/Footer";
import VideoModal from "./components/VideoModal";
import FadeInSection from "./components/FadeInSection";
import FloatingActions from "./components/FloatingActions";
import Preloader from "./components/Preloader";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Clients from "./sections/Clients";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum load time of 2 seconds to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleLoad = () => {
      // If window loads after 2s, we're good. If before, timer handles it.
      // If window loads much later, we might want to wait for it, 
      // but for better UX we often just rely on the timer or a combination.
      // Here we'll ensure at least 2s passed.
    };

    window.addEventListener("load", handleLoad);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);



  return (
    <div className="bg-black">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      <FloatingActions />
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
          <Clients />
        </FadeInSection>
        <Gallery onVideoSelect={setSelectedVideo} />
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
