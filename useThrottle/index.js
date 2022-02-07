import { useEffect, useRef } from 'react';

function useThrottle(state, callback, delay) {
  const isFirst = useRef(true);
  const timer = useRef(null);
  const trailingCallback = useRef(null);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
    } else if (!timer.current) {
      callback(state);
      timer.current = setTimeout(() => {
        timer.current = null;
        if (typeof trailingCallback.current === 'function') {
          trailingCallback.current();
        }
        trailingCallback.current = null;
      }, delay);
    } else {
      trailingCallback.current = callback.bind(this, state);
    }
  }, [state]);
}

export default useThrottle;
