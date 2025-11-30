import { useEffect } from "react";

const LoadFonts = () => {
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link1.rel = "stylesheet";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;500;600;700&display=swap";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return null;
};

export default LoadFonts;
