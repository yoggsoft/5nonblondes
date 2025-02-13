'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

import { Container } from '@/components';

export default function ContactUs() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id='contacts'
      className='relative text-white flex flex-col-reverse items-center w-full mt-16 mx-auto max-w-[150rem] lg:mt-56 lg:flex-row'
    >
      <Image
        className='mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-3xl'
        src='/img/2024_10_19_Bruxelles_Scotts/120535c2-cb26-4479-bbc3-fff4a57a1419.jpg'
        width={750}
        height={533}
        alt='Band playing'
      />
      <Container customClasses='flex flex-col overflow-hidden lg:items-end lg:justify-end lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
        <div
          className='flex justify-end flex-col lg:items-end lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl'
          ref={textRef}
          style={{
            transform: isInView ? 'none' : 'translateX(100px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}>
          <div className='flex flex-col max-w-4xl lg:text-right'>
            <div className='overflow-hidden'>
              <h2
                className={`font-bold text-6xl pb-6 translate-y-24 font-permanentMarker ${
                  isInView ? 'animate-slideUp' : ''
                }`}>
                Contact us
              </h2>
            </div>
            <p>
              And get us a drink in case you around. <br></br>Email us at{' '}
              <a
                className='text-fuchsia-800 underline underline-offset-4 hover:opacity-75'
                href='https://www.paninopanini.co.uk/'
                target='_blank'
                rel='noreferrer'>
                {' '}
                hello@panicpanini.com{' '}
              </a>{' '}
              or fill the form below.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
