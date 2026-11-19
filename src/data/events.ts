export interface EventItem {
  id: number;
  title: string;
  date: string;
  place: string;
  seats: number;
}

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Almaty Tech Meetup',
    date: '2026-11-22',
    place: 'Almaty Hub',
    seats: 60,
  },
  {
    id: 2,
    title: 'React Native Workshop',
    date: '2026-11-25',
    place: 'KBTU Lab',
    seats: 35,
  },
  {
    id: 3,
    title: 'Startup Pitch Night',
    date: '2026-11-28',
    place: 'Astana Hub',
    seats: 80,
  },
  {
    id: 4,
    title: 'UI/UX Design Jam',
    date: '2026-12-02',
    place: 'Esentai Coworking',
    seats: 45,
  },
];