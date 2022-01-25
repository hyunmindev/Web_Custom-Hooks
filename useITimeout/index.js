import { useEffect, useRef, useState } from 'react';

function useTimeout(callback, milliseconds) {
  const timer = useRef(null);
  const [isCleared, setIsCleared] = useState(false);

  const clear = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      setIsCleared(true);
    }
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      callback();
      setIsCleared(true);
    }, milliseconds);
    return () => clear();
  }, [milliseconds]);

  return { isCleared, clear };
}

export default useTimeout;
