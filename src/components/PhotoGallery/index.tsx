'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/components';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaMapMarkerAlt as MapMapper, FaCalendarAlt as Calendar } from 'react-icons/fa';

const galleryThumbnails = [
  {
    id: 1,
    src: '/img/2024_05_31_Brussels_RockClassic/a5b8362d-211b-4e8a-929f-ba6c4945ffe0.jpg',
    club: 'Rock Classic',
    city: 'Brussels',
    date: '31/05/2024',
    slides: [
      { src: '/img/2024_05_31_Brussels_RockClassic/0f10d2d3-adcb-4320-a0f3-046841033206.jpg' },
      { src: '/img/2024_05_31_Brussels_RockClassic/38b5d789-2cda-4648-8341-5420201f9fc3.jpg' },
      { src: '/img/2024_05_31_Brussels_RockClassic/a5b8362d-211b-4e8a-929f-ba6c4945ffe0.jpg' },
      { src: '/img/2024_05_31_Brussels_RockClassic/a7abdf31-ed44-46ff-a66d-031d64b4cc0b.jpg' },
      { src: '/img/2024_05_31_Brussels_RockClassic/c175852b-2d40-4a6b-90aa-9ab6e248c2ff.jpg' },
      { src: '/img/2024_05_31_Brussels_RockClassic/f4bc9b40-428b-45ea-86d5-757b67eb4d39.jpg' },
    ],
  },
  {
    id: 2,
    src: '/img/2024_10_19_Brussels_Scotts/c868215e-0a58-4a19-a7c7-67c3625e1cf1.jpg',
    club: 'Scotts Bar',
    city: 'Brussels',
    date: '10/09/2024',
    slides: [
      { src: '/img/2024_10_19_Brussels_Scotts/120535c2-cb26-4479-bbc3-fff4a57a1419.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/253000c4-c39c-483e-9c74-91d540d46007.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/c34ebe63-9eb0-496b-8c66-1183949a6a52.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/c868215e-0a58-4a19-a7c7-67c3625e1cf1.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/cb39c2d4-6b14-4bc5-8a28-794e6ce776c6.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/d636f94b-bca5-491d-ad42-d6e3a17c91a4.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/eeb06009-fcbe-4aa4-bea4-42d94aea6d40.jpg' },
      { src: '/img/2024_10_19_Brussels_Scotts/dee4a61d-67a0-44c1-b715-49b384c3d023.jpg' },
    ],
  },
];

export default function PhotoGallery() {
  const [openGallery, setOpenGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const clickHandler = (index: number) => {
    setOpenGallery(true);
    setGalleryIndex(index);
  };

  return (
    <section
      id='photo-gallery'
      className='w-full mt-16 pb-14 mb-[128px] text-white'
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={sectionRef}>
      <Container>
        <div className='overflow-hidden'>
          <h2
            className={`font-bold text-6xl pb-6 translate-y-24 font-permanentMarker ${
              isInView ? 'animate-slideUp' : ''
            }`}>
            Gallery
          </h2>
        </div>
        <p>Past shows:</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
          {galleryThumbnails.map((item, index) => {
            return (
              <div className='flex flex-col mb-5 leading-none' key={item.id}>
                <div className='w-full h-full rounded-lg bg-fuchsia-500 transition-all'>
                  <Image
                    className='rounded-lg cursor-pointer hover:opacity-60 transition-all'
                    src={item.src}
                    width={400}
                    height={400}
                    alt='Gallery gig thumbnail'
                    onClick={() => clickHandler(index)}
                  />
                </div>
                <h4 className='text-sm md:text-lg xl:text-xl font-medium'>{item.club}</h4>
                <p className='flex items-center ml-1'>
                  <MapMapper />
                  <span className='ml-2 text-sm md:text-lg'>{item.city}</span>
                </p>
                <p className='flex items-center ml-1'>
                  <Calendar />
                  <span className='ml-2 text-sm md:text-lg'>{item.date}</span>
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
