'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import CookieConsent from 'react-cookie-consent';
import Image from 'next/image';

import {
  BandIdentity,
  BackToTop
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
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-purple-500 to-pink-500 opacity-10'></div>
        <div className='absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat'></div>
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
      <BackToTop customClasses={`reveal${isScrollTopVisible ? ' visible' : ''}`} />
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

// /* The .image-container class needs to be applied to a div wrapped around the image you want to apply this filter to */
// .image-container {
//   display: inline-block;
//   position: relative;
//   line-height: 0;
//   background: #42a4ff;
// }
// .image-container::after {
//   content: '';
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   mix-blend-mode: lighten;
//   background: #ab0000;
//   opacity: 0.83;
// }
// .image-container > img {
  // -webkit-filter:   contrast(120%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%);
  //         filter:   contrast(120%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%);
  // mix-blend-mode: multiply;
// }
