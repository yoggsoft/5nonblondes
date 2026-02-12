'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import classNames from 'classnames';

import { BackToTop } from '@/components';
import './styles.css';

function SvgBackground (): React.ReactNode {
  return (
    <svg className='intro__bokeh fade' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='10%' cy='85%' r='75%' />
      <circle cx='45%' cy='50%' r='15%' />
      <circle cx='85%' cy='35%' r='30%' />
      <circle cx='60%' cy='85%' r='20%' />
      <circle cx='45%' cy='50%' r='30%' />
      <circle cx='35%' cy='25%' r='20%' />
      <circle cx='90%' cy='-25%' r='35%' />
      <circle cx='-15%' cy='30%' r='30%' />
      <circle cx='65%' cy='85%' r='55%' />
      <circle cx='45%' cy='50%' r='20%' />
    </svg>
  )
}

export default function Intro(): React.ReactNode {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const { scrollY } = window;
    if (scrollY > 50 && !isInView) {
      setIsScrollTopVisible(true);
    } else {
      setIsScrollTopVisible(false);
    }
  }, [isInView]);

  return (
    <section
      id='intro'
      className='relative flex flex-col items-center h-[100vh] w-full overflow-hidden max-h-[93rem] min-h-[43rem] lg:h-screen lg:flex-row lg:justify-start'
      ref={sectionRef}
    >
      {
        isInView && <SvgBackground />
      }
      <h1
        className={
          classNames(
            'absolute uppercase z-50 p-5 text-4xl lg:text-7xl xl:text-8xl text-white font-bold left-0 shadow-sm italic text-center top-1/2 -translate-y-1/2 bottom-20 w-full',
            'shine',
          )
        }
      >
        5 Non Blondes<br /> more than music, the right soundtrack for your moments.
      </h1>
      <Image
        className='z-20 absolute md:hidden w-full max-w-[600px] h-auto p-5 top-[50%] -translate-y-[80%] box-border'
        width={1371}
        height={574}
        alt='5NB - 5 Non Blondes logo'
        src={'/img/5NB-logo-3d-lg.webp'}
      />
      <div className='absolute w-full h-full top-0 left-0'>
        <Image
          height={1980}
          width={1080}
          className='object-cover w-full h-full z-10 mix-blend-multiply max-md:hidden'
          src={'/img/portraits/portrait7.jpg'}
          alt='5 Non Blondes'
        />
      </div>
      <BackToTop className={`reveal${isScrollTopVisible ? ' visible' : ''}`} />
    </section>
  );
}
