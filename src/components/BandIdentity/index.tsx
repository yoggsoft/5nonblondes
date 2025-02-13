'use client';

import Image from 'next/image';
import {
  Container,
  ButtonPrimary,
  ScrollTo
} from '@/common';

export default function BandIdentity() {
  return (
    <>
      <div className='w-full py-3 z-50 lg:hidden'>
        <Container customClasses='px-2.5 flex items-center justify-between font-sm'>
          <Image className='max-w-[6rem] h-auto ' src='/img/5nb-logo.jpeg' width={324} height={236} alt='5 Non Blondes logo' />
          <ScrollTo toId='shows' duration={1500}>
            <ButtonPrimary customClasses='text-sm'>Live gigs</ButtonPrimary>
          </ScrollTo>
        </Container>
      </div>
      <div className='hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex'>
        <div className='logo-container border-y-[1.25rem] border-fluo-green py-4 opacity-1'>
          <Image className='px-12 py-3 max-w-[18.75rem] h-auto' src='/img/5nb-logo.jpeg' width={324} height={236} alt='5 Non Blondes logo' />
        </div>
      </div>
    </>
  );
}
