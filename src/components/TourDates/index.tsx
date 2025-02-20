import { ButtonPrimary } from '@/components';

import type { GetServerSideProps } from 'next';
import type { EventList } from '../../../types/custom';

export const getServerSideProps = (async () => {
  const res = await fetch('/tourdates.json');
  const events: EventList = await res.json()
  return { props: { events } }
}) satisfies GetServerSideProps<{ events: EventList }>


const tourDates: EventList = [
  {
    id: 1,
    date: '29 Mar',
    venue: 'La Ferme Rose',
    city: 'Uccle',
  },
  {
    id: 2,
    date: '5 April',
    venue: 'Scotts Bar',
    city: 'Brussels',
  }
];

export default function TourDates() {
  return (
    <ul className='list-none'>
      {tourDates.map((gig) => {
        return (
          <li key={gig.id} className='flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row'>
            <div className='flex flex-col items-center justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl'>
              <div className='flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 bg-fuchsia-400 rounded-md lg:mr-12 lg:w-[5.3rem] lg:h-[5.3rem]'>
                <p className='font-bold text-center uppercase'>{gig.date}</p>
              </div>
              <div className=' text-white font-semibold leading-tight lg:ml-[20%]'>
                <p>{gig.date}</p>
              </div>
            </div>
            <div className='flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl'>
              <div className='text-white font-semibold leading-tight'>
                <p>{gig.venue}</p>
                <p>{gig.city}</p>
              </div>
              <div className='ml-2.5 lg:ml-auto'>
                {
                  gig.url && <ButtonPrimary className='text-xs md:text-sm lg:text-base'>Get Ticket</ButtonPrimary>
                }
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
