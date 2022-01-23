import { useEffect, useRef, useState } from 'react';

function useInView(options) {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      // eslint-disable-next-line no-shadow
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
        setEntry(entry);
      });
    }, options);
    if (!ref) {
      intersectionObserver.observe(ref.current);
    }
  }, []);

  return { ref, inView, entry };
}

export default useInView;
