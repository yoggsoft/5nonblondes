'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/components';
import { FaTiktok, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id='about'
      className='relative flex flex-col items-center justify-end w-full mx-auto max-w-[150rem] lg:flex-row lg:mt-56 mb-[rem] pb-[4em]'
    >
      <Container className='lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
        <div
          className='relative flex flex-col lg:max-w-md xl:max-w-xl 2xl:max-w-3xl'
          ref={textRef}
          style={{
            transform: isInView ? 'none' : 'translateX(-100px)',
            opacity: isInView ? 1 : 0
          }}>
          <div className='overflow-hidden'>
            <h2
              className={`uppercase italic font-bold text-6xl pb-6 translate-y-20 text-white font-permanentMarker shine ${
                isInView ? 'animate-slideUp' : ''
              }`}>
              The Band
            </h2>
          </div>

          <p className='text-2xl lg:text-3xl pb-6 text-white px-4'>
            <strong>In the mood for dancing?</strong><br /><br />From classic rock to pop anthems and dance hits — we&apos;ve got it covered. We keep your guests entertained from the first song to the very last encore.<br /><br />
Our repertoire blends timeless favourites with the latest chart-toppers, and it&apos;s constantly updated to match the energy of every event.<br /><br />
            <a href="">Discover our band</a>
          </p>
          
          <div className='flex pt-8 gap-4 items-center'>
            <a
              className="hover:text-amethyst-primary text-white"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Facebook"
            >
              <FaFacebookSquare className='text-2xl lg:text-4xl' />
            </a>
            <a
              className="hover:text-amethyst-primary text-white"
              href="https://www.tiktok.com/@5non.blondes"
              aria-label="Follow 5 Non Blondes on TikTok"
            >
              <FaTiktok className='text-2xl lg:text-4xl' />
            </a>
            <a
              className="hover:text-amethyst-primary text-white"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Instagram"
            >
              <FaInstagram className='text-2xl lg:text-4xl' />
            </a>
          </div>
        </div>
      </Container>
      <Image
        className='w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-3xl'
        src='/img/portraits/portrait2.jpg'
        width={750}
        height={533}
        alt='Holding guitar'
      />
    </section>
  );
}
