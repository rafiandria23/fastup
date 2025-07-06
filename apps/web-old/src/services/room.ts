import { BaseService } from './base';

export interface IRoomService extends BaseService {
  createRoom(payload: { name: string }): Promise<any>;
  getRooms(): Promise<any>;
}

class RoomService extends BaseService implements IRoomService {
  async createRoom(payload: { name: string }): Promise<any> {
    const { name } = payload;

    const { data } = await this.client.post('/rooms', {
      name,
    });
    return data;
  }

  async getRooms(): Promise<any> {
    const { data } = await this.client.get('/rooms');

    return data;
  }
}

export default new RoomService();
