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
import { Player } from '@/player/player.entity';
import { PlayerRoom } from '@/player-room/player-room.entity';

@Table({
  modelName: 'Room',
  tableName: 'rooms',
  underscored: true,
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class Room extends Model<Room> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: string;

  @Column
  name: string;

  @Column
  level: string;

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
    () => Player,
    () => PlayerRoom,
  )
  players: Player[];
}
