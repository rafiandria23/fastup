import type { AxiosInstance } from 'axios';
import axios from 'axios';

export class BaseService {
  client: AxiosInstance;

  constructor(baseURL: string = 'http://localhost:3000/api') {
    this.client = axios.create({
      baseURL,
    });
  }
}
