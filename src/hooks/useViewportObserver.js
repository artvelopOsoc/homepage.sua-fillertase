import { useEffect, useRef, useState } from 'react';

const options = { threshold: 0.2 };

export function useViewportObserver() {
  const [visible, setVisible] = useState(false);
  const viewTarget = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([enteries], observer) => {
      if (enteries.isIntersecting) {
        setVisible(true);
      } else if (enteries.intersectionRatio < 0.2) {
        setVisible(false);
      }
    }, options);

    if (viewTarget.current !== null) {
      io.observe(viewTarget.current);
    }
  }, []);

  return {
    visible,
    setVisible,
    viewTarget,
  };
}
