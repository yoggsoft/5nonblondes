'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

import {
  BandIdentity,
  BackToTop,
  // Container,
  // IntroTourDates
} from '@/components';

export default function Intro() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

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
      className='
        relative
        flex
        flex-col
        items-center
        h-[100svh]
        w-full
        overflow-hidden
        max-h-[93rem]
        min-h-[43rem]
        lg:h-screen
        lg:flex-row
        lg:justify-start
      '
      ref={sectionRef}
    >
      <BandIdentity />
      <div className='absolute w-full h-full top-0 left-0'>
        <Image
          height={1980}
          width={1080}
          className='
            object-cover
            w-full
            h-full
            z-10
            bg-blend-multiply
          '
          src={'/img/portraits/portrait7.jpg'}
          alt='headling'
        />
      </div>
      {/* <Container className='
        flex
        flex-col
        flex-col-reverse
        justify-end
        items-end
        absolute
        right-0
        bottom-0
        -translate-x-1/2
        -translate-y-1/2
        lg:justify-end
        lg:items-end
      '>
        <IntroTourDates />
      </Container> */}
      <BackToTop className={`reveal${isScrollTopVisible ? ' visible' : ''}`} />
    </section>
  );
}
