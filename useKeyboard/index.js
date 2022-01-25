import { useEffect } from 'react';

function useKeyboard(callback, ref) {
  useEffect(() => {
    if (!ref?.current) {
      window.addEventListener('keydown', callback);
    } else {
      ref.current.addEventListener('keydown', callback);
    }
    return () => {
      if (!ref?.current) {
        window.removeEventListener('keydown', callback);
      } else {
        ref.current.removeEventListener('keydown', callback);
      }
    };
  });
}

export default useKeyboard;
