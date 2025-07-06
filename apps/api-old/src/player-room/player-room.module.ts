import { Module } from '@nestjs/common';

// Database
import { DatabaseModule } from '@/database/database.module';

// Services
import { PlayerRoomService } from './player-room.service';

// Providers
import { playerRoomProviders } from './player-room.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    PlayerRoomService,
    ...playerRoomProviders,
  ],
})
export class PlayerRoomModule {}
