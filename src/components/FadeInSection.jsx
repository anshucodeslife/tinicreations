import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useInView from "../hooks/useInView";

export default function FadeInSection({ children }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      animate={isMobile ? { opacity: 1, y: 0 } : (isVisible ? { opacity: 1, y: 0 } : {})}
      transition={isMobile ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
