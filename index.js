// index.js
import { useState, useEffect } from 'react';

export function useThrottle(callback, delay) {
  const [lastExecTime, setLastExecTime] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      if (now - lastExecTime >= delay) {
        callback();
        setLastExecTime(now);
      }
    }, delay - (Date.now() - lastExecTime));

    return () => clearTimeout(handler);
  }, [callback, delay, lastExecTime]);
}
