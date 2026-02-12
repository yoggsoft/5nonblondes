'use client';

import Image from 'next/image';
import { Container } from '@/components';
import { FaInstagram, FaTiktok, FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed w-full flex-col justify-between grow-0 shrink-0 z-10 flex'>
      <Container className='flex items-center justify-between backdrop-blur-lg p-6 w-full min-w-full'>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <Image
              className='max-w-[6rem] md:max-w-[10rem] h-auto hover:'
              src='/img/5NB-logo-BW-lg.webp'
              width={180}
              height={42}
              alt='Footer logo'
            />
          </Link>
          <h1 className='text-4xl uppercase font-bold text-white hidden md:flex'>5 NON BLONDES</h1>
          <div className='flex text-white gap-4'>
            <Link href="/about">ABOUT</Link>
            {/* <Link href="/" className='pointer-envents-none'>VIDEOS(soon)</Link>
            <Link href="/" className='pointer-envents-none'>GALLERY(soon)</Link> */}
            <Link href="events">EVENTS</Link>
            <Link href="contact">CONTACT US</Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <a
            className="hover:text-amethyst-primary text-white"
            href="https://www.instagram.com/5nblondes"
            aria-label="Follow 5 Non Blondes on Facebook"
          >
            <FaFacebookSquare className='text-3xl md:text-4xl' /></a>
          <a className="hover:text-amethyst-primary text-white"
            href="https://www.instagram.com/5nblondes"
            aria-label="Follow 5 Non Blondes on Instagram">
            <FaInstagram className='text-3xl md:text-4xl' /></a>
          <a
            className="hover:text-amethyst-primary text-white"
            href="https://www.tiktok.com/@5non.blondes"
            aria-label="Follow 5 Non Blondes on TikTok"
          >
            <FaTiktok className='text-2xl md:text-4xl' />
          </a>
        </div>
      </Container>
    </header>
  );
}
