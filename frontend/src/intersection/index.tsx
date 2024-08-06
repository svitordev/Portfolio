/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
interface IntersectionObserverProps {
  element: HTMLElement | null;
  animate: ({ element }: { element: HTMLElement }) => void;
  reset: ({ element }: { element: HTMLElement }) => void;
}
function useIntersectionObserver({
  element,
  animate,
  reset,
}: IntersectionObserverProps) {
  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate({element});
          } else {
            reset({element});
          }
        });
      },
      { threshold: 0.2 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, [animate, element, reset]);

  return null;
}

export default useIntersectionObserver;
