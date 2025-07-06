import { BaseService } from './base';

export interface IPlayerService extends BaseService {
  signIn(payload: { name: string; }): Promise<any>;
  joinRoom(payload: {
    player_id: string;
    room_id: string;
  }): Promise<any>;
}

class PlayerService extends BaseService implements IPlayerService  {
  async signIn(payload: { name: string; }): Promise<any> {
    const { name } = payload;

    const { data } = await this.client.post('/players', {
      name,
    });

    return data;
  }

  async joinRoom(payload: {
    player_id: string;
    room_id: string;
  }): Promise<any> {
    const { player_id, room_id } = payload;

    return await this.client.put(`/players/${player_id}`, {
      room_id
    });
  }
}

export default new PlayerService();
