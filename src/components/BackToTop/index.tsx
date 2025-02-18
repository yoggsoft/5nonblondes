import classNames from 'classnames';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop({...props}):React.ReactNode {
  const { className: classNameProp } = props;
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div
      className={
        classNames(`
          'fixed',
          'bottom-2',
          'border-solid',
          'border-2',
          'rounded-full',
          'right-2',
          'p-3.5 z-[99]',
          'opacity-90',
          'cursor-pointer  ',
          'border-fuchsia-100',
          'text-white',
          'bg-purple-primary',
          'hover:bg-amethyst-primary',
        `, classNameProp)
      }
      onClick={clickHandler}
    >
      <FaArrowUp />
    </div>
  );
}
