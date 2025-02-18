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
        py-3
        lg:py-12
      '>
        <Container className='flex items-center justify-between '>
          <div>
            <Image
              className='max-w-[6rem] md:max-w-[10rem] h-auto'
              src='/img/5NB-logo-bw-small.png'
              width={180}
              height={42}
              alt='Footer logo'
            />
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
