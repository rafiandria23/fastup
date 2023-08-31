import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { RoomModule } from './room/room.module';
import { PlayerRoomModule } from './player-room/player-room.module';
import { GameModule } from './game/game.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PlayerModule,
    RoomModule,
    PlayerRoomModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
