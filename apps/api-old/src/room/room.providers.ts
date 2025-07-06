import { Room } from './room.entity';

export const roomProviders = [
  {
    provide: 'ROOM_REPOSITORY',
    useValue: Room,
  },
];
