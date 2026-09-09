'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components';
import { FaInstagram, FaTiktok, FaFacebookSquare, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import classNames from 'classnames';

const NAV_LINKS = [
  { href: '/about', label: 'ABOUT' },
  { href: '/events', label: 'EVENTS' },
  { href: '/contact', label: 'CONTACT US' },
];

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/people/5NonBlondes-5NB/61550656681487/?sk=about',
    label: 'Follow 5 Non Blondes on Facebook',
    Icon: FaFacebookSquare,
  },
  {
    href: 'https://www.instagram.com/5nblondes',
    label: 'Follow 5 Non Blondes on Instagram',
    Icon: FaInstagram,
  },
  {
    href: 'https://www.tiktok.com/@5non.blondes',
    label: 'Follow 5 Non Blondes on TikTok',
    Icon: FaTiktok,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='fixed w-full flex-col justify-between grow-0 shrink-0 z-10 flex'>
      <Container className='flex items-center justify-between backdrop-blur-lg p-6 w-full min-w-full'>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <Image
              className='max-w-[6rem] md:max-w-[10rem] h-auto'
              src='/img/5NB-logo-BW-lg.webp'
              width={180}
              height={42}
              alt='5 Non Blondes logo'
            />
          </Link>
          <span className='text-4xl uppercase italic font-bold text-white hidden lg:flex'>5 NON BLONDES</span>
          <nav aria-label='Main' className='hidden md:flex text-white gap-4'>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={classNames({ 'text-amethyst-primary': pathname === href })}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='hidden md:flex gap-4'>
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a key={label} className='hover:text-amethyst-primary text-white' href={href} aria-label={label}>
              <Icon className='text-3xl md:text-4xl' />
            </a>
          ))}
        </div>
        <button
          type='button'
          className='flex md:hidden text-white text-3xl'
          aria-expanded={menuOpen}
          aria-controls='mobile-nav'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Container>
      {
        menuOpen && (
          <nav
            id='mobile-nav'
            aria-label='Mobile'
            className='md:hidden flex flex-col items-center gap-6 bg-charcoal-primary/95 backdrop-blur-lg text-white py-8 text-xl'
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className={classNames({ 'text-amethyst-primary': pathname === href })}
              >
                {label}
              </Link>
            ))}
            <div className='flex gap-6 pt-2'>
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a key={label} className='hover:text-amethyst-primary text-white' href={href} aria-label={label}>
                  <Icon className='text-3xl' />
                </a>
              ))}
            </div>
          </nav>
        )
      }
    </header>
  );
}
