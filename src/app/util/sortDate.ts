import { EventList, Event } from '../../../types/custom';

type orderType = 'asc' | 'desc';

export default function sortDate(list: EventList, order:orderType = 'desc'): EventList {
  return list.sort((a: Event, b: Event) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === order ? dateB - dateA : dateA - dateB;
  });
}
