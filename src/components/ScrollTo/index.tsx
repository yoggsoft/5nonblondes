import { scrollTo } from '@/app/util/scrollTo';

interface ScrollToProps {
  toId: string;
  toRef?: React.RefObject<HTMLDivElement>;
  duration: number;
  children: React.ReactNode;
}

const ScrollTo = ({
  toId,
  toRef,
  duration,
  children
}: ScrollToProps) => {

  const handleClick = () => {
    return scrollTo({ id: toId, ref: toRef, duration });
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollTo;
