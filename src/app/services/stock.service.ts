import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'https://yahoo-finance166.p.rapidapi.com/api/market/get-quote';
  private headers = {
    'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com',
    'x-rapidapi-key': 'f1929fd61dmsh32fbc48c51c2f09p137829jsn22da5cc73b31',
  };

  constructor() {}

  async getStockQuote(symbol: string): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: this.headers,
        params: { symbols: symbol },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching stock quote:', error);
      throw error;
    }
  }
}
