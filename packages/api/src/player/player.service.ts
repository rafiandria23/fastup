import { Injectable, Inject , HttpException, HttpStatus} from '@nestjs/common';

// Models
import { PlayerRoom } from '@/player-room/player-room.entity';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY')
    private playerRepository: typeof Player,
    @Inject('PLAYER_ROOM_REPOSITORY')
    private playerRoomRepository: typeof PlayerRoom,
  ) {}
  
  async signIn(payload: { name: string; }) {
    const { name } = payload;

    const player = await this.playerRepository.findOne({
      where: {
        name,
      },
    });

    if (player) {
      return {
        success: true,
        timestamp: new Date(),
        data: {
          player,
        },
      };
    }

    const newPlayer = await this.playerRepository.create({
      name,
    });

    return {
      success: true,
      timestamp: new Date(),
      data: {
        player: newPlayer,
      },
    };
  }

  async addScore(payload: { room_id: string; player_id: string; score: number; }) {
    const { room_id, player_id, score } = payload;
    
    const player = await this.playerRepository.findByPk(player_id);

    if (!player) {
      throw new HttpException(
        'Player not found!',
        HttpStatus.NOT_FOUND,
      );
    }

    const playerRoom = await this.playerRoomRepository.findOne({
      where: {
        room_id,
        player_id,
      },
    });

    if (!playerRoom) {
      throw new HttpException(
        'Player room not found!',
        HttpStatus.NOT_FOUND,
      );
    }

    await playerRoom.update({
      score: playerRoom.score + score
    });

    return {
      success: true,
      timestamp: new Date(),
    };
  }
}
