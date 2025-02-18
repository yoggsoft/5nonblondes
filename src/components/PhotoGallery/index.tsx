'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import Lightbox from 'yet-another-react-lightbox';

import { Container } from '@/components';
import { FaMapMarkerAlt as MapMapper, FaCalendarAlt as Calendar } from 'react-icons/fa';

import 'yet-another-react-lightbox/styles.css';

const galleryThumbnails: Array<galleryItem> = [
  {
    id: 5,
    src: '/img/2025_02_14_Brussels_RockClassic/2025_02_14_Brussels_RockClassic.png',
    club: 'Rock Classic Bar',
    city: 'Brussels',
    date: '02/14/2025'
  },
  {
    id: 4,
    src: '/img/2024_10_19_Brussels_Scotts/dee4a61d-67a0-44c1-b715-49b384c3d023.JPG',
    club: 'Scotts Bar & Kitchen',
    city: 'Brussels',
    date: '10/19/2024',
    slides: [
      { src: '/img/2024_10_19_Brussels_Scotts/120535c2-cb26-4479-bbc3-fff4a57a1419.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/253000c4-c39c-483e-9c74-91d540d46007.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/c34ebe63-9eb0-496b-8c66-1183949a6a52.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/c868215e-0a58-4a19-a7c7-67c3625e1cf1.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/cb39c2d4-6b14-4bc5-8a28-794e6ce776c6.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/d636f94b-bca5-491d-ad42-d6e3a17c91a4.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/eeb06009-fcbe-4aa4-bea4-42d94aea6d40.JPG' },
      { src: '/img/2024_10_19_Brussels_Scotts/dee4a61d-67a0-44c1-b715-49b384c3d023.JPG' },
    ],
  },
  {
    id: 3,
    src: '/img/2024_05_31_Brussels_RockClassic/2024_05_31_Brussels_RockClassic.png',
    club: 'Rock Classic Bar',
    city: 'Brussels',
    date: '05/31/2024',
    slides: [
      { src: '/img/2024_05_31_Brussels_RockClassic/0f10d2d3-adcb-4320-a0f3-046841033206.JPG' },
      { src: '/img/2024_05_31_Brussels_RockClassic/38b5d789-2cda-4648-8341-5420201f9fc3.JPG' },
      { src: '/img/2024_05_31_Brussels_RockClassic/a5b8362d-211b-4e8a-929f-ba6c4945ffe0.JPG' },
      { src: '/img/2024_05_31_Brussels_RockClassic/a7abdf31-ed44-46ff-a66d-031d64b4cc0b.JPG' },
      { src: '/img/2024_05_31_Brussels_RockClassic/c175852b-2d40-4a6b-90aa-9ab6e248c2ff.JPG' },
      { src: '/img/2024_05_31_Brussels_RockClassic/f4bc9b40-428b-45ea-86d5-757b67eb4d39.JPG' },
    ],
  },
  {
    id: 2,
    src: '/img/2024_03_23_Brussels_Scotts/2024_03_23_Brussels_Scotts.png',
    club: 'Scotts Bar & Kitchen',
    city: 'Brussels',
    date: '03/23/2024'
  },
  {
    id: 1,
    src: '/img/2023_09_29_Brussels_Scotts/2023_09_29_Brussels_Scotts.png',
    club: 'Scotts Bar & Kitchen',
    city: 'Brussels',
    date: '09/29/2023'
  }
];

export type galleryItem = {
  id: number,
  src: string,
  club: string,
  city: string,
  date: string,
  slides?: Array<Record<'src', string>>
}

export default function PhotoGallery() {
  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const clickHandler = (index: number) => {
    setOpenGallery(true);
    setGalleryIndex(index);
  };

  return (
    <section
      id='photo-gallery'
      className='
        w-full
        mt-16
        pb-14
        mb-[4rem]
        lg:mb-[8rem]
      text-white
      '
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={sectionRef}>
      <Container>
        <div className='overflow-hidden'>
          <h2
            className={classNames(
              'font-bold',
              'text-3xl',
              'lg:text-6xl',
              'pb-6',
              'translate-y-24',
              {
                ['animate-slideUp']: isInView
              }
            )}
          >
            Gallery
          </h2>
        </div>
        <p className='font-bold italic text-xl md:text-2xl lg:text-3xl'>Past shows:</p>
        <div className='grid grid-cols-1 grid- md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5'>
          {
            galleryThumbnails.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className='
                    flex
                    flex-col
                    mb-2
                    leading-none
                  '
                >
                  <div
                    className={classNames(
                      'w-full',
                      'mb-2',
                      'lg:mb-4',
                      'rounded-lg',
                      'transition-all',
                      'overflow-hidden',
                      'border-transparent',
                      'border-4',
                      'rounded-lg',
                      'h-[250px]',
                      'lg:h-[500px]',
                      {
                        'hover:border-purple-primary cursor-pointer': item.slides,
                      }
                    )}
                  >
                    <Image
                      className='transition-all w-full'
                      src={item.src}
                      width={720}
                      height={1280}
                      alt='Gallery gig thumbnail'
                      onClick={() => item.slides && clickHandler(index)}
                    />
                  </div>
                  <p className='text text-2xl font-bold'>{item.club}</p>
                  <p className='flex items-center ml-1'>
                    <MapMapper />
                    <span className='ml-2 text-xl md:text-lg'>{item.city}</span>
                  </p>
                  <p className='flex items-center ml-1'>
                    <Calendar />
                    <span className='ml-2  md:text-lg'>{item.date}</span>
                  </p>
                </div>
              );
            })}
          <Lightbox
            open={openGallery}
            close={() => setOpenGallery(false)}
            slides={galleryThumbnails[galleryIndex].slides}
          />
        </div>
      </Container>
    </section>
  );
}
