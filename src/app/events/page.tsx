'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import { Container, Shows, PhotoGallery } from '@/components';

export default function Events() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <>
      <section
        id='incoming-shows'
        className='mt-24 lg:mt-32 text-white relative flex flex-col items-center justify-end w-full mx-auto max-w-[150rem] lg:flex-row px-8'
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        ref={sectionRef}
      >
        <Container>
          <div className='flex justify-center'>
            <h2
              className={classNames(
                'text-4xl',
                'font-bold',
                'lg:text-6xl',
                'shine',
              )}
            >
                Incoming Shows 🪩 💃🏽🕺
            </h2>

          </div>
          <Shows />
        </Container>
      </section>
      <PhotoGallery />
    </>
  );
}
