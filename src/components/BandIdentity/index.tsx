'use client';

import Image from 'next/image';
import { Container, ScrollTo } from '@/components';
import { FaInstagram, FaTiktok, FaFacebookSquare } from 'react-icons/fa';

export default function BandIdentity() {
  return (
    <>
      <div className='w-full py-3 z-50 lg:hidden'>
        <Container customClasses='px-2.5 flex items-center justify-between font-sm'>
          <Image className=' max-w-[6rem] h-auto ' src='/img/5nb-logo.jpeg' width={204} height={204} alt='5 Non Blondes logo' />
          <ScrollTo toId='shows' duration={1500}>
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
          </ScrollTo>
        </Container>
      </div>
      <div className='hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex'>
        <div className='logo-container opacity-1'>
          <Image className='rounded max-w-[18.75rem] h-auto' src='/img/5nb-logo.jpeg' width={324} height={324} alt='5 Non Blondes logo' />
        </div>
      </div>
    </>
  );
}
