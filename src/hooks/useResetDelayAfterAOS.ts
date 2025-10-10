import { useEffect } from 'react';

export const useResetDelayAfterAOS = (element: HTMLElement | null, extraStyles?: Object) => {
  useEffect(() => {
    if (!element) return;

    const applyStyles = () => {
      element.style.transitionDelay = '0s';

      if (extraStyles) {
        for (const [key, value] of Object.entries(extraStyles)) {
          (element.style as any)[key] = value;
        }
      }
    };

    // When AOS is done animating, set transition delay back to 0s for hover animation
    element.addEventListener('transitionend', applyStyles, { once: true });
    element.addEventListener('animationend', applyStyles, { once: true });

    return () => {
      element.removeEventListener('transitionend', applyStyles);
      element.removeEventListener('animationend', applyStyles);
    };
  }, [element, extraStyles]);
};
