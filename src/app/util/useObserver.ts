import { useState, useEffect } from 'react';

export function useIsIntersecting({
  options, elementRef, keepWatching, callback, callbackRef}: {
  options: Record<string, string>,
  elementRef: HTMLDivElement,
  keepWatching: boolean,
  callback: (arg:HTMLDivElement) => void,
  callbackRef: HTMLDivElement
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (isIntersecting && !keepWatching) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (callback) {
          callback(callbackRef);
        }
      }
      if (!entry.isIntersecting && keepWatching) {
        setIsIntersecting(false);
      }
    }, options);

    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
    };
  }, [callback, callbackRef, elementRef, isIntersecting, options, keepWatching]);

  return isIntersecting;
}
