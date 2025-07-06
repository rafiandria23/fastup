import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';

// Models
import { Player } from '@/player/player.entity';
import { PlayerRoom } from '@/player-room/player-room.entity';
import { Room } from './room.entity';

@Injectable()
export class RoomService {
  constructor(
    @Inject('ROOM_REPOSITORY')
    private roomRepository: typeof Room,
    @Inject('PLAYER_REPOSITORY')
    private playerRepository: typeof Player,
    @Inject('PLAYER_ROOM_REPOSITORY')
    private playerRoomRepository: typeof PlayerRoom,
  ) {}

  async create(payload: { name: string; level: string }) {
    const { name, level } = payload;

    const newRoom = await this.roomRepository.create({
      name,
      level,
    });

    return {
      success: true,
      timestamp: new Date(),
      data: {
        room: newRoom,
      }
    }
  }

  async get(payload: { room_id: string; }) {
    const { room_id } = payload;

    const room = await this.roomRepository.findOne({
      where: {
        id: room_id,
      },
      include: [
        {
          model: this.playerRepository,
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!room) {
      throw new HttpException(
        'Room not found!',
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      success: true,
      timestamp: new Date(),
      data: {
        room,
      },
    };
  }

  async join(payload: { room_id: string; player_id: string; }) {
    const { room_id, player_id } = payload;

    const [room, player] = await Promise.all([
      this.roomRepository.findOne({
        where: {
          id: room_id,
        },
      }),
      this.playerRepository.findOne({
        where: {
          id: player_id,
        },
      }),
    ]);

    if (!room || !player) {
      throw new HttpException(
        'Room or player not found!',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.playerRoomRepository.create({
      room_id,
      player_id,
    });

    return {
      success: true,
      timestamp: new Date(),
    };
  }
}
