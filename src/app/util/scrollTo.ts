import { animateScroll } from './animate-scroll';

const logError = () => console.error('Invalid element, are you sure you\'ve provided element id or react ref?');

const getElementPosition = (element: HTMLElement): number => element.offsetTop;

interface ScrollToParams {
  id?: string | number;
  ref?: React.RefObject<HTMLElement> | null;
  duration?: number;
}

export const scrollTo = ({ id = 0, ref = null, duration = 3000 }: ScrollToParams): void => {
  // The position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // Decide what type of reference that is
  // If neither ref nor id is provided, set element to null
  const element = ref && ref.current ? ref.current : id ? document.getElementById(id.toString()) : null;

  if (!element) {
    // Log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration,
  });
};
