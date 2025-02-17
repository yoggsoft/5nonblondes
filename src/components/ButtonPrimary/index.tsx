import classname from 'classnames';

export default function ButtonPrimary({...props}):React.ReactNode {
  const { children, className: classNameProp } = props;
  return (
    <button
      className={
        classname(`
          px-5
          uppercase
          py-2
          mt-3
        text-white
          whitespace-nowrap
          font-bold
          text-base
          bg-yellow-btn-primary
          rounded-full
          transition-all
          hover:bg-yellow-600
          `,
        classNameProp
        )
      }
    >
      {children}
    </button>
  );
}
