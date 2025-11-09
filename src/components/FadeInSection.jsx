import { motion } from "framer-motion";
import useInView from "../hooks/useInView";

export default function FadeInSection({ children }) {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
