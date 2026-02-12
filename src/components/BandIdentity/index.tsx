'use client';

import Image from 'next/image';
import { Container } from '@/components';
import { FaInstagram, FaTiktok, FaFacebookSquare } from 'react-icons/fa';

export default function BandIdentity() {
  return (
    <>
      <div className='
        h-full
        w-full
        flex-col
        justify-between
        grow-0
        shrink-0
        z-10
        flex
      '>
        <Container className='flex items-center justify-between backdrop-blur-lg p-6 w-full min-w-full'>
          <div className='flex items-center gap-4'>
            <Image
              className='max-w-[6rem] md:max-w-[10rem] h-auto hover:'
              src='/img/5NB-logo-BW-lg.webp'
              width={180}
              height={42}
              alt='Footer logo'
            />
            <h1 className='text-4xl uppercase font-bold text-white hidden md:flex'>5 NON BLONDES</h1>
            <div className='flex text-white gap-4'>
              <a href="about">ABOUT</a>
              <a href="videos">VIDEOS</a>
              <a href="gallery">GALLERY</a>
              <a href="event">EVENTS</a>
              <a href="contact">CONTACT US</a>
            </div>
          </div>
          <div className='flex gap-4'>
            <a
              className="hover:text-amethyst-primary text-white"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Facebook"
            >
              <FaFacebookSquare className='text-3xl md:text-4xl' />
            </a>
            <a
              className="hover:text-amethyst-primary text-white"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Instagram"
            >
              <FaInstagram className='text-3xl md:text-4xl' />
            </a>
            <a
              className="hover:text-amethyst-primary text-white"
              href="https://www.tiktok.com/@5non.blondes"
              aria-label="Follow 5 Non Blondes on TikTok"
            >
              <FaTiktok className='text-2xl md:text-4xl' />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
