import { Module } from '@nestjs/common';

// Database
import { DatabaseModule } from '@/database/database.module';

// Controllers
import { PlayerController } from './player.controller';

// Services
import { PlayerService } from './player.service';

// Providers
import { playerRoomProviders } from '@/player-room/player-room.providers';
import { playerProviders } from './player.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayerController],
  providers: [
    PlayerService,
    ...playerProviders,
    ...playerRoomProviders,
  ],
})
export class PlayerModule {}
