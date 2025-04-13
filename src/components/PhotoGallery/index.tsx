'use client';

import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import Lightbox from 'yet-another-react-lightbox';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import { Container } from '@/components';
import { FaMapMarkerAlt as MapMapper, FaCalendarAlt as Calendar } from 'react-icons/fa';
import sortDate from '@/app/util/sortDate';
import rawTourDates from '@/tourdates.json';
import 'yet-another-react-lightbox/styles.css';
import { EventList } from '../../../types/custom';

export default function PhotoGallery() {
  const [openGallery, setOpenGallery] = useState<boolean>(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [tourDates, setTourDates ] = useState<EventList>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const sortedDates: EventList = sortDate(rawTourDates, 'asc');
    const pastEvents = sortedDates.filter(i => new Date() > new Date(i.date))
    setTourDates(pastEvents);
  }, []);

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
              'text-4xl',
              'lg:text-6xl',
              'pb-6',
              'translate-y-24',
              'shine',
              {
                ['animate-slideUp']: isInView
              }
            )}
          >
            Gallery
          </h2>
        </div>
        <p className='font-bold italic text-xl md:text-2xl lg:text-3xl'>Past shows:</p>
        <div className='
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-2
          mt-5
        '>
          {
            tourDates.map((item, index) => {
              return item.src && (
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
                      'h-[500px]',
                      {
                        'hover:border-purple-primary cursor-pointer': item.slides,
                      }
                    )}
                  >
                    <Image
                      className={classNames(
                        'transition-all',
                        'duration-300',
                        'w-full',
                        'min-h-full',
                        'object-cover',
                        'grayscale',
                        {
                          ['hover:scale-125']: item.slides
                        }
                      )}
                      src={item.src}
                      width={720}
                      height={1280}
                      alt='Gallery gig thumbnail'
                      onClick={() => item.slides && clickHandler(index)}
                    />
                  </div>
                  <p className='text text-2xl font-bold'>{item.venue}</p>
                  <p className='flex items-center ml-1'>
                    <MapMapper />
                    <span className='ml-2 text-xl md:text-lg'>{item.city}</span>
                  </p>
                  <p className='flex items-center ml-1'>
                    <Calendar />
                    <span className='ml-2  md:text-lg'>{moment(item.date).format('DD MMMM YYYY')}</span>
                  </p>
                </div>
              );
            })}
          <Lightbox
            open={openGallery}
            close={() => setOpenGallery(false)}
            slides={tourDates[galleryIndex]?.slides || []}
          />
        </div>
      </Container>
    </section>
  );
}
