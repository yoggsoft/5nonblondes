'use client';

import Image from 'next/image';
import { Container } from '@/components';
import { FaInstagram, FaTiktok, FaFacebookSquare } from 'react-icons/fa';

export default function BandIdentity() {
  return (
    <>
      <div className='w-full py-3 z-50 lg:hidden'>
        <Container className='px-2.5 flex items-center justify-between font-sm'>
          <h1 className="text-white font-bold  text-3xl italic p-4">
            5 NON BLONDES
          </h1>
          <div className='flex gap-4'>
            <a
              className="hover:opacity-75 text-white"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Facebook"
            >
              <FaFacebookSquare size={36} />
            </a>
            <a
              className="hover:opacity-75 text-white"
              href="https://www.instagram.com/5nblondes"
              aria-label="Follow 5 Non Blondes on Instagram"
            >
              <FaInstagram size={36} />
            </a>
            <a
              className="hover:opacity-75 text-white"
              href="https://www.tiktok.com/@5non.blondes"
              aria-label="Follow 5 Non Blondes on TikTok"
            >
              <FaTiktok size={34} />
            </a>
          </div>
        </Container>
      </div>
      <div className='hidden h-full w-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex'>
        <div className='logo-container opacity-1 flex'>
          <Image 
            className='rounded max-w-[18.75rem] h-auto'
            src='/img/5nb-logo.jpeg'
            width={324}
            height={324}
            alt='5 Non Blondes logo'
          />
          <h1 className="text-white font-bold absolute text-3xl left-0 top-0 italic p-12">
            5 NON BLONDES
          </h1>
        </div>
      </div>
    </>
  );
}
