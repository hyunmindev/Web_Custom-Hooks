import { useEffect, useRef } from 'react';

function useIntersectionObserver(callback, options) {
  const ref = useRef();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => callback(entry));
    }, options);
    intersectionObserver.observe(ref.current);
  }, []);

  return ref;
}

export default useIntersectionObserver;
