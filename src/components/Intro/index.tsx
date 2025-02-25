'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import classNames from 'classnames';

import { BandIdentity, BackToTop } from '@/components';
import './styles.css';

export default function Intro() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const { scrollY } = window;
    if (scrollY > 50 && !isInView) {
      setIsScrollTopVisible(true);
    } else {
      setIsScrollTopVisible(false);
    }
  }, [isInView]);

  return (
    <section id='intro' className='intro__section' ref={sectionRef}>
      <svg className={classNames(
        'intro__bokeh',
        {
          'hidden': !isInView
        }
      )}
      viewBox='0 0 10 10'
      xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='10%' cy='85%' r='75%' />
        <circle cx='45%' cy='50%' r='15%' />
        <circle cx='85%' cy='35%' r='30%' />
        <circle cx='60%' cy='85%' r='20%' />
        <circle cx='45%' cy='50%' r='30%' />
        <circle cx='35%' cy='25%' r='20%' />
        <circle cx='90%' cy='-25%' r='35%' />
        <circle cx='-15%' cy='30%' r='30%' />
        <circle cx='65%' cy='85%' r='55%' />
        <circle cx='45%' cy='50%' r='20%' />
      </svg>
      <BandIdentity />
      <h1 className={
        classNames(
          'intro__hero-title',
          {
            ['animate-slideUp']: isInView
          }
        )
      }
      >
        THE BEST <span className='text-amethyst-primary'>DISCO PARTY</span><br />COVER BAND IN BRUSSELS
      </h1>
      <Image
        className='intro__background-logo z-20'
        width={1371}
        height={574}
        alt='5NB - 5 Non Blondes logo'
        src={'/img/5NB-logo-3d-lg.webp'}
      />
      <div className='absolute w-full h-full top-0 left-0'>
        <Image
          height={1980}
          width={1080}
          className='intro__background-image'
          src={'/img/portraits/portrait7.jpg'}
          alt='5 Non Blondes'
        />
      </div>
      <BackToTop className={`reveal${isScrollTopVisible ? ' visible' : ''}`} />
    </section>
  );
}
