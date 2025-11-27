import { useEffect, useRef, useState } from 'react';

export const useSectionInView = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return { ref, active };
};
