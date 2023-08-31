import { PlayerRoom } from './player-room.entity';

export const playerRoomProviders = [
  {
    provide: 'PLAYER_ROOM_REPOSITORY',
    useValue: PlayerRoom,
  },
];
