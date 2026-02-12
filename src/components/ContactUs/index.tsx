'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

import { Container } from '@/components';
import { FaInstagram } from 'react-icons/fa';

export default function ContactUs() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id='contacts'
      className='relative text-white flex flex-col-reverse items-center w-full mt-16 mx-auto max-w-[150rem] lg:mt-56 lg:flex-row mb-[2rem] lg:mb-[6rem]
    '>
      <Image
        className='mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-3xl'
        src='/img/portraits/portrait3.jpg'
        height={1980}
        width={1080}
        alt='Band playing'
      />
      <Container className='flex flex-col overflow-hidden lg:items-end lg:justify-end lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
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
                Follow us on
              </h2>
            </div>
            <p className='flex items-center text-3xl pb-6 text-white gap-4'>
              <a
                className="hover:text-amethyst-primary text-white"
                href="https://www.instagram.com/5nblondes"
                aria-label="Follow 5 Non Blondes on Instagram"
              >
                <FaInstagram className='text-2xl lg:text-4xl' />
              </a>&nbsp;And get us a drink in case you around.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
