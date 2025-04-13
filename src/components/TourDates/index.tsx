'use client';
import { useEffect, useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';

import sortDate from '@/app/util/sortDate';
import rawTourDates from '@/tourdates.json';

import type { Event, EventList } from '../../../types/custom';

export default function TourDates(): React.ReactNode {
  const [tourDates, setTourDates ] = useState<EventList>([]);

  useEffect(() => {
    const sortedDates: EventList = sortDate(rawTourDates, 'asc');
    const upcomingEvents = sortedDates.filter(i => new Date() < new Date(i.date))
    setTourDates(upcomingEvents);
  }, []);

  return (
    tourDates.length > 1
      ? (
        <ul className='list-none'>
          {
            tourDates.map(gig => (
              <TourDateItem key={gig.id} gig={gig} />
            ))
          }
        </ul>
      )
      : <TourDatesEmptyState />
  )
}

const TourDateItem = ({gig}: {gig: Event} ) => {
  return (
    <li
      className='
            flex
            items-center
            justify-between
            py-2
            border-solid
            border-b-2
          border-white
            last:border-b-0
            leading-tight
            text-xl
            md:py-3
            md:text-2xl
            lg:py-5
            lg:justify-center
            lg:text-2xl
            xl:text-3xl
            lg:flex-row
            backdrop-blur-sm
          '>
      <div className='
            flex
            flex-col
            items-center
            justify-between
            text-center
            text-base
            leading-none
            w-[40%]
            md:text-xl
            lg:w-6/12
            lg:flex-row
            lg:justify-start
            lg:text-left
            lg:text-2xl
          '>
        <div className='
          flex
          flex-col
          justify-center
          items-center
          date
          w-[3.4rem]
          h-[3.4rem]
          leading-tight
          p-2
          rounded-md
          lg:mr-12
          lg:w-[5.3rem]
          lg:h-[5.3rem]
          bg-purple-primary
        '>
          <p className='text-white italic font-bold text-center uppercase'>
            {moment(new Date(gig.date)).format('DD')}
          </p>
          <p className='text-white italic font-bold text-center uppercase'>
            {moment(new Date(gig.date)).format('MMM')}
          </p>
        </div>
        <div className=' text-white font-semibold leading-tight lg:ml-[20%]'>
          <p>20:30</p>
        </div>
      </div>
      <div className='flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl'>
        <div className='text-white font-semibold leading-tight'>
          <p>{gig.venue}</p>
        </div>
        <div className='ml-2.5 lg:ml-auto text-white font-semibold leading-tight'>
          <p>{gig.city}</p>
        </div>
      </div>
    </li>
  )
}

const TourDatesEmptyState = () => {
  return (
    <div className='text-center placeholder-opacity-100'>
      <p
        className={classNames(
          'text-2xl',
          'translate-y-10',
          'font-bold',
          'text-white',
          'lg:text-4xl',
          'lg:translate-y-20',
          'animate-slideUp',
          'shine',
        )}
      >
        <br />
        Thanks for vibing with us these past few months!<br /><br />
        
        We don’t have any more shows lined up for now, but we’ll be back with more.
        <br />
        <br />
        See you real soon!<br />
      </p>
    </div>
  )
}
