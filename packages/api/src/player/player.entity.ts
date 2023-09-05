import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

// Models
import { Room } from '@/room/room.entity';
import { PlayerRoom } from '@/player-room/player-room.entity';

@Table({
  modelName: 'Player',
  tableName: 'players',
  underscored: true,
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class Player extends Model<Player> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: string;

  @Column
  name: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @DeletedAt
  @Column
  deleted_at: Date | null;

  @BelongsToMany(
    () => Room,
    () => PlayerRoom,
  )
  rooms: Room[];
}
