'use client';

import { useRef } from 'react';
import classNames from 'classnames';
import { useInView } from 'framer-motion';

import { Container, TourDates } from '@/components';

export default function Shows() {
  const showsContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollableDivRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(showsContainerRef, { once: true });

  return (
    <section
      id='shows'
      className='
        fade
        w-full
        relative
        mt-8
        bg-incoming-shows
        bg-cover
        bg-no-repeat
        bg-center
        lg:h-screen
        lg:min-h-[45rem]
        lg:max-h-[49rem]
        lg:mt-20
      '
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={showsContainerRef}
    >
      <Container className='pb-2.5 h-full'>
        <div
          className='scoller relative mt-6 h-[calc(100%-14rem)] no-scrollbar'
          ref={scrollableDivRef}
        >
          <TourDates />
        </div>
      </Container>
      <div className='
        absolute
        w-full
        h-full
        top-0
        left-0
        bg-hero-pattern
        backdrop-blur-sm
        grayscale
        bg-repeat z-[-1]
      '></div>
    </section>
  );
}
