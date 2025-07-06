import { Controller, Post, Patch, Body } from '@nestjs/common';

// Services
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/signin')
  async signIn(@Body() payload: { name: string; }) {
    return await this.playerService.signIn(payload);
  }

  @Patch('/add-score')
  async addScore(@Body() payload: { room_id: string; player_id: string; score: number; }) {
    return await this.playerService.addScore(payload);
  }
}
