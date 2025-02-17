'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { FaMapMarkerAlt as MapMapper } from 'react-icons/fa';

// const observerOptions = {
//   rootMargin: '0px',
//   threshold: 0.3,
// };

const tourDates = [
  {
    id: 1,
    date: '29 Mar',
    dayTime: 'Friday 20.00',
    venue: 'La Ferme Rose',
    city: 'Uccle',
  },
  {
    id: 2,
    date: '5 April',
    dayTime: 'Friday 20.00',
    venue: 'Scotts Bar',
    city: 'Brussels',
  },
];

export default function IntroTourDates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <div
      className='flex flex-col justify-center items-center lg:justify-end lg:items-end'
      style={{
        transform: isInView ? 'none' : 'translateY(-100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={sectionRef}>
      <h2 className='text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl'>
        Next Shows
      </h2>
      <ul className='list-none'>
        {tourDates.map((gig) => {
          return (
            <li
              key={gig.id}
              className='flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl'>
              <div className='
                flex
                flex-col
                justify-center
                items-center
                date
                w-[4.7rem]
                h-[4.7rem]
                p-2
              bg-purple-primary
                mr-4
                text-2xl
                rounded-md
                border-8
              border-white
                md:mr-12
                lg:w-[5.5rem]
                lg:h-[5.5rem]
              '>
                <p className='font-bold text-xl text-white leading-none text-center uppercase lg:text-3xl'>
                  {gig.date}
                </p>
              </div>
              <div className='text-white text-right leading-none md:mr-12'>
                <p>{gig.dayTime}</p>
                <p>{gig.venue}</p>
                <div className='flex justify-end md:hidden'>
                  <MapMapper className='fill-purple-primary mr-2' />
                  <p>{gig.city}</p>
                </div>
              </div>
              <div className='hidden text-right text-white leading-none md:flex'>
                <MapMapper className='fill-purple-primary mr-2' />
                <p>{gig.city}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
