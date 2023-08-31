
import { Sequelize } from 'sequelize-typescript';

// Models
import { Player } from '@/player/player.entity';
import { Room } from '@/room/room.entity';
import { PlayerRoom } from '@/player-room/player-room.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME || 'fastup',
      });

      sequelize.addModels([
        Player,
        Room,
        PlayerRoom,
      ]);

      await sequelize.sync();

      return sequelize;
    },
  },
];
