import Image from 'next/image';
import { Container, SubscribeForm } from '@/components';
import { FaTiktok, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

export default function   Footer() {
  return (
    <section id='footer' className='bg-black w-full lg:fixed lg:bottom-0 lg:z-[-1] lg:h-[8rem]'>
      <footer className='w-full'>
        {/* <div className=' py-16'>
          <Container customClasses='flex flex-col lg:items-center lg:flex-row'>
            <div className='basis-2/3 text-white'>
              <h3 className='text-5xl font-bold'>Subscribe</h3>
              <p>To our newsletter to get the latest updates and live gigs info.</p>
            </div>
            <div className='flex items-cente w-full mt-2.5 lg:mt-0 lg:basis-1/3 lg:justify-end'>
              <SubscribeForm />
            </div>
          </Container>
        </div> */}
        <div className='bg-fuchsia-500 pt-3 relative z-[100]'>
          <Container customClasses='flex justify-between items-center'>
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
          <div className='bg-black text-white mt-2 py-2'>
            <p className='text-[0.7rem] text-center leading-tight mb-1 flex items-center justify-center'>
              Made by 
              <a
                className='text-fuchsia-600 underline underline-offset-4 hover:text-fuchsia-300'
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
