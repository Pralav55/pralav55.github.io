import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export const useScrollDirectionHook = () => {
  const { scrollY } = useScroll();

  const [scrollDirection, setScrollDirection] = useState("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      const diff = current - previous;
      setScrollDirection(diff > 0 ? "down" : "up");
    } else {
      setScrollDirection("up");
    }
  });

  return scrollDirection;
};
