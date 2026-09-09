import Image from 'next/image';
import { Container } from '@/components';
import { FaTiktok, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id='footer' className='bg-charcoal-primary w-full'>
      <Container className='flex justify-between items-center py-4 lg:py-6'>
        <Image
          className='max-w-[6rem] lg:max-w-[8rem] h-auto'
          src='/img/5NB-logo-BW-lg.webp'
          width={120}
          height={42}
          alt='5 Non Blondes logo'
        />
        <div className='flex gap-3 md:gap-4'>
          <a
            className="hover:text-amethyst-primary text-white"
            href="https://www.facebook.com/people/5NonBlondes-5NB/61550656681487/?sk=about"
            aria-label="Follow 5 Non Blondes on Facebook"
          >
            <FaFacebookSquare className='text-2xl lg:text-4xl' />
          </a>
          <a
            className="hover:text-amethyst-primary text-white"
            href="https://www.instagram.com/5nblondes"
            aria-label="Follow 5 Non Blondes on Instagram"
          >
            <FaInstagram className='text-2xl lg:text-4xl' />
          </a>
          <a
            className="hover:text-amethyst-primary text-white"
            href="https://www.tiktok.com/@5non.blondes"
            aria-label="Follow 5 Non Blondes on TikTok"
          >
            <FaTiktok className='text-2xl lg:text-4xl' />
          </a>
        </div>
      </Container>
      <Container className='text-xs flex justify-center md:justify-end leading-none pb-4 lg:pb-6 text-white uppercase italic'>
        <span className='flex gap-2'>
          <span>
            Site&nbsp;by&nbsp;
            <a
              className='font-bold underline underline-offset-4 hover:text-amethyst-primary'
              href='https://www.manuelreyes.dev/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit Manuel Reyes Website'
            >
              manuelreyes
            </a>
          </span>
          <span>
            Photos&nbsp;by&nbsp;
            <a
              className='font-bold underline underline-offset-4 hover:text-amethyst-primary'
              href='https://www.instagram.com/davide_matassoni?igsh=NGg5eWdqOTM2cHVx'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Folow Davide Matassoni on Instagram'
            >
              Davide Matassoni
            </a>
          </span>
        </span>
      </Container>
    </footer>
  );
}
