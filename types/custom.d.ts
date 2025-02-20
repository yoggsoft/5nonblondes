export type GalleryItem = {
  id: number,
  venue: string,
  city: string,
  date: string,
  src: string,
	url?: string,
  slides?: Array<Record<'src', string>>
}


export type Event = Omit<GalleryItem, 'slides' | 'src'>
export type EventList = Array<Event>;
