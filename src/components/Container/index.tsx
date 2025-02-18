import classname from 'classnames';

export default function Container({...props}):React.ReactNode {
  const { children, className: classNameProp } = props;
  return (
    <div
      className={
        classname('container mx-auto px-2.5',
          classNameProp
        )
      }
    >{children}</div>
  );
}
