import { Module } from '@nestjs/common';

// Database
import { DatabaseModule } from '@/database/database.module';

// Controllers
import { RoomController } from './room.controller';

// Services
import { RoomService } from './room.service';

// Providers
import { playerProviders } from '@/player/player.providers';
import { playerRoomProviders } from '@/player-room/player-room.providers';
import { roomProviders } from './room.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [
    RoomService,
    ...roomProviders,
    ...playerProviders,
    ...playerRoomProviders,
  ],
})
export class RoomModule {}
