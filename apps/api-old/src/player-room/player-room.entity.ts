import {
  Model,
  Table,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

// Models
import { Room } from '@/room/room.entity';
import { Player } from '@/player/player.entity';

@Table({
  modelName: 'PlayerRoom',
  tableName: 'player_rooms',
  underscored: true,
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class PlayerRoom extends Model<PlayerRoom> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  })
  id: string;

  @ForeignKey(() => Room)
  @Column({
    type: DataType.UUID,
  })
  room_id: string;

  @ForeignKey(() => Player)
  @Column({
    type: DataType.UUID,
  })
  player_id: string;

  @Column
  score: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @DeletedAt
  @Column
  deleted_at: Date | null;
}
