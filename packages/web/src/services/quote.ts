import { BaseService } from './base';

export interface IQuoteService extends BaseService {
  getQuote(): Promise<any>;
}

class QuoteService extends BaseService implements IQuoteService {
  async getQuote(): Promise<any> {
    const { data } = await this.client.get('/quotes', {
      params: {
        category: 'computers',
      },
      headers: {
        'X-API-Key': 'CLQYebD9AbJHjiclUR0ynw==BuOqAacaP9tgglH4',
      },
    });

    return data;
  }
}

export default new QuoteService('https://api.api-ninjas.com/v1');
