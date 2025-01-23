/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
interface IntersectionObserverProps {
  elements: React.MutableRefObject<null>;
  animate: (element: gsap.TweenTarget) => void;
  reset: (element: gsap.TweenTarget) => void;
}
function useIntersectionObserver({
  elements,
  animate,
  reset,
}: IntersectionObserverProps) {
  useEffect(() => {
    if (!elements.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(elements.current);
          } else {
            reset(elements.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elements.current) {
      observer.observe(elements.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elements]);
}

export default useIntersectionObserver;
