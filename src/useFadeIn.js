import { useEffect, useState } from "react";

function useFadeIn(baseClass = "", animationClass = "fade-in", delay = 0) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return `${baseClass}${fadeIn ? ` ${animationClass}` : ""}`;
}

export default useFadeIn;