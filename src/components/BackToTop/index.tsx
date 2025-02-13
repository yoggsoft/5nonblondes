export default function BackToTop({ customClasses }: { customClasses: string }) {
  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={`fixed bottom-2 border-solid border-2 border-fuchsia-100 rounded right-2 bg-fuchsia-400 p-3.5 z-[99] opacity-90 cursor-pointer before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:top-[35%] before:left-[50%] before:content-[''] before:w-0 before:h-[1px] before:border-solid before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-black${
        customClasses ? ` ${customClasses}` : ''
      }`}
      onClick={clickHandler}></div>
  );
}
