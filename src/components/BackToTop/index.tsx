import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop({ customClasses }: { customClasses: string }) {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={`
        fixed
        bottom-2
        border-solid border-2
      border-fuchsia-100
      text-white
        rounded-full
        right-2
      bg-purple-primary
      hover:bg-amethyst-primary
        p-3.5 z-[99]
        opacity-90
        cursor-pointer
        ${customClasses ? ` ${customClasses}` : ''}
      `}
      onClick={clickHandler}
    >
      <FaArrowUp />
    </div>
  );
}
