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
        mt-16
        bg-incoming-shows
        bg-cover
        bg-no-repeat
        bg-center
        h-[32rem]
        lg:h-screen
        lg:min-h-[45rem]
        lg:max-h-[49rem]
        lg:mt-56
      '
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={showsContainerRef}
    >
      <Container className='pb-2.5 h-full'>
        <div className='flex flex-col items-center text-white pt-11'>
          <div className='overflow-hidden'>
            <h2
              className={classNames(
                'text-4xl',
                'translate-y-10',
                'font-bold',
                'lg:text-6xl',
                'lg:translate-y-20',
                'animate-slideUp',
                'shine',
                {
                  'animate-slideUp': isInView
                }
              )}
            >
              Incoming Shows 🪩 💃🏽🕺
            </h2>
          </div>
        </div>
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
        bg-repeat z-[-1]
      '></div>
    </section>
  );
}
