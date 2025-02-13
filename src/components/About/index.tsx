'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/common';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id='about'
      className='relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56'
    >
      <Container customClasses='lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
        <div
          className='relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl'
          ref={textRef}
          style={{
            transform: isInView ? 'none' : 'translateX(-100px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}>
          <div className='overflow-hidden'>
            <h2
              className={`font-bold text-6xl pb-6 translate-y-20 ${
                isInView ? 'animate-slideUp' : ''
              }`}>
              About
            </h2>
          </div>

          <p className='text-2xl pb-6'>
            We are a lively party cover band, based in <strong className='text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600'>
              Brussels
            </strong>, who bring a burst of energy to every performance.
            With a diverse mix of classic rock, pop, and dance hits from the 70, 80 90s and 00.
          </p>
          <p className='text-2xl'>
            We know how to get any crowd on their feet.
            Whether it`s a wedding or a corporate event, their high-energy shows always create an unforgettable vibe.
          </p>
          <div className='flex pt-8 gap-4'>
            <a
              className="hover:opacity-75"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Facebook"
            >
              <FaInstagram size={28} />
            </a>
            <a
              className="hover:opacity-75"
              href="https://www.tiktok.com/@5non.blondes"
              aria-label="Follow 5 Non Blondes on TikTok"
            >
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
      </Container>
      <Image
        className='w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl'
        src='/img/portraits/portrait3.jpg'
        width={750}
        height={533}
        alt='Holding guitar'
      />
    </section>
  );
}
