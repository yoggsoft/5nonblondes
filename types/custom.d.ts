export type Event = {
  id: number,
  venue: string,
  city: string,
  date: string,
  src: string,
	url?: string,
  slides?: Array<Record<'src', string>>
}
export type EventList = Array<Event>;
