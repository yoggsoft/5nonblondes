import Image from 'next/image';
import { Container } from '@/components';
import { FaTiktok, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

export default function   Footer() {
  return (
    <section id='footer' className='bg-black w-full lg:fixed lg:bottom-0 lg:z-[-1] lg:h-[8rem]'>
      <footer className='w-full'>
        <div className='bg-amethyst-primary pt-3 relative z-[100]'>
          <Container className='flex justify-between items-center'>
            <Image
              className='max-w-[10rem] lg:max-w-[15rem] h-auto rounded-full'
              src='/img/5nb-logo.jpeg'
              width={30}
              height={30}
              alt='Footer logo'
            />
            <div className='flex gap-3 md:gap-4'>
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
          <div className='bg-black text-white mt- py-4 italic'>
            <p className='text-xl text-center leading-tight mb-1 flex items-center justify-center'>
              Made by&nbsp;
              <a
                className='text-wshite underline underline-offset-4 hover:text-amethyst-primary'
                href='https://www.manuelreyes.dev/'
                target='_blank'
                rel='referrer'
                aria-label='Manuel Reyes'
              >
                manuelreyes
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
