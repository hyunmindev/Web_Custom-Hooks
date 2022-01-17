import { useEffect, useRef } from 'react';

function useIntersectionObserver() {
  const ref = useRef();
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIntersectionRatio(entry.intersectionRatio);
      });
    }, {
      threshold: 0.5,
    });
    intersectionObserver.observe(ref.current);
  }, []);
}

export default useIntersectionObserver;
