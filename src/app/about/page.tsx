'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/components';
import { FaTiktok, FaFacebookSquare, FaInstagram, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id='about'
      className='relative flex flex-col items-center justify-end w-full mx-auto max-w-[150rem] lg:flex-row lg:mt-56 mb-[rem] pb-[4em]'
    >
      <Container className='px-12'>
        <div
          className='relative flex flex-col lg:max-w-md xl:max-w-xl 2xl:max-w-3xl'
          ref={textRef}
          style={{
            transform: isInView ? 'none' : 'translateX(-100px)',
            opacity: isInView ? 1 : 0
          }}
        >
          <h1
            className='uppercase italic font-bold text-6xl pb-6 text-white font-permanentMarker shine'>
            ABOUT US
          </h1>
          <div className='text-2xl lg:text-3xl pb-6 text-white px-4'>
            <p className='py-2'>
              Since 2021, 5 Nonblondes has been dedicated to making every event unique.
            </p>
            <p className='py-2'>
              We&apos;re a versatile live band with a carefully curated repertoire that spans genres and decades — always tailored to fit the mood and energy of the occasion.
Dynamics 6-piece ensemble featuring Drums, Bass, Guitar, Keyboard and a talented duo of vocalists!
            </p>
            <p className='py-2'>
              From weddings and private parties to corporate events and public celebrations, we bring professionalism, adaptability, and a genuine care for detail. Every set is prepared with your audience in mind, so the music not only sounds right but feels right.
            </p>
            <p className='py-2'>
              You can take this to the next level by adding additional vocalists or musicians like saxophone or trumpet enriching the band pieces.
            </p>
            <p className='py-2'>
              Our approach is simple: understand your vision, translate it into sound, and deliver a performance that creates the atmosphere you want — whether that&apos;s elegant and intimate or vibrant and full of energy.
            </p>
            <p className='py-2 text-center'>
              <strong>
                5 Non Blondes
              </strong><br />more than music, the right soundtrack for your moments.
              
            </p>
          </div>

          <div className='flex flex-col pt-8 gap-4 items-center justify-center'>
            <div className='flex items-center text-white gap-8'>
              Follow us: 
              <Link
                className="hover:text-amethyst-primary text-white"
                href="https://www.instagram.com/5nblondes"
                aria-label="Follow 5 Non Blondes on Facebook"
              >
                <FaFacebookSquare className='text-2xl lg:text-4xl' />
              </Link>
              <Link
                className="hover:text-amethyst-primary text-white"
                href="https://www.tiktok.com/@5non.blondes"
                aria-label="Follow 5 Non Blondes on TikTok"
              >
                <FaTiktok className='text-2xl lg:text-4xl' />
              </Link>
              <Link
                className="hover:text-amethyst-primary text-white"
                href="https://www.instagram.com/5nblondes"
                aria-label="Follow 5 Non Blondes on Instagram"
              >
                <FaInstagram className='text-2xl lg:text-4xl' />
              </Link>
            </div>
            <div className='text-white items-center flex gap-4'>
              <Link href="mailto:5nonblondesmusicband@gmail.com">Get in touch!</Link>
              <a href="tel:+32491592032 "><FaPhone className='text-2xl lg:text-4xl' /></a>
            </div>
          </div>
        </div>
      </Container>
      <Image
        className='w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-3xl'
        src='/img/portraits/portrait3.jpg'
        width={750}
        height={533}
        alt='Holding guitar'
      />
    </section>
  );
}
