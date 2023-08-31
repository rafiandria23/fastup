import { Test, TestingModule } from '@nestjs/testing';
import { PlayerRoomService } from './player-room.service';

describe('PlayerRoomService', () => {
  let service: PlayerRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerRoomService],
    }).compile();

    service = module.get<PlayerRoomService>(PlayerRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
