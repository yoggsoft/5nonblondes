// import { useRouter } from 'next/navigation';
import { scrollTo } from '@/app/util/scrollTo';

const ScrollTo = ({
  toId,
  toRef,
  duration,
  children
}: {
  toId: string,
  toRef?: HTMLDivElement,
  duration: number,
  children: React.ReactNode
}) => {
  // const router = useRouter();

  const handleClick = () => {
    return scrollTo({ id: toId, ref: toRef, duration });
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollTo;
