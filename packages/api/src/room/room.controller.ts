import { Controller, Post, Get, Body, Param } from '@nestjs/common';

// Services
import { RoomService } from './room.service';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

  @Post()
  async create(@Body() payload: { name: string; level: string; }) {
    return await this.roomService.create(payload);
  }

  @Get('/:id')
  async get(@Param('id') room_id: string) {
    return await this.roomService.get({
      room_id,
    });
  }

  @Post('/join')
  async join(@Body() payload: { room_id: string; player_id: string }) {
    return await this.roomService.join(payload);
  }
}
