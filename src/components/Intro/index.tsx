'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import CookieConsent from 'react-cookie-consent';
import Image from 'next/image';

import {
  BandIdentity,
  BackToTop,
  Container,
  IntroTourDates
} from '@/components';

// const observerOptions = {
//   rootMargin: '0px',
//   threshold: 0,
// };

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
      ref={sectionRef}>
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
          '
          src={'/img/portraits/portrait7.jpg'}
          alt='headling'
        />
      </div>
      <Container className='
        flex
        flex-col
        justify-center
        items-center
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        lg:justify-end
        lg:items-end
      '>
        <IntroTourDates />
      </Container>
      <BackToTop className={`reveal${isScrollTopVisible ? ' visible' : ''}`} />
      <CookieConsent
        disableStyles={true}
        buttonText='Consent'
        cookieName='cookie_consent'
        buttonClasses='bg-fuchsia-600 rounded-full p-1 px-3 text-sm text-xs text-white'
        containerClasses='w-full fixed !bottom-0 bg-fuchsia-400 p-3 z-[50] lg:bg-stone-300/70 lg:backdrop-blur-lg lg:left-8 lg:!bottom-2 lg:rounded-md lg:max-w-md'
        contentClasses='text-sm leading-none mb-1 lg:text-white'
        expires={20}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </section>
  );
}
