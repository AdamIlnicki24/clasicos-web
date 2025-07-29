import { useState, useEffect } from "react";

export function useScrollAtBottom(enterOffset = 30, exitOffset = 1000): boolean {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let lastTick = 0;
    const onScroll = () => {
      if (!lastTick) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY + window.innerHeight;
          const height = document.documentElement.scrollHeight;

          if (!atBottom && scrolled >= height - enterOffset) {
            setAtBottom(true);
          } else if (atBottom && scrolled < height - exitOffset) {
            setAtBottom(false);
          }
          lastTick = 0;
        });
        lastTick = 1;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [enterOffset, exitOffset, atBottom]);

  return atBottom;
}
