import { useState, useEffect } from "react";

export function useScrollAtComments(
  commentsId: string,
  offset: number
): boolean {
  const [isAtComments, setIsAtComments] = useState(false);

  useEffect(() => {
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const element = document.getElementById(commentsId);
          if (element) {
            const rect = element.getBoundingClientRect();

            setIsAtComments(rect.top <= window.innerHeight - offset);
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [commentsId, offset]);

  return isAtComments;
}
