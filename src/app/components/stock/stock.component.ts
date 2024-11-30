import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock',
  standalone: true, // IMPORTANT : Rend ce composant autonome
  imports: [CommonModule],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  stockData: any;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.fetchStockData();
  }

  async fetchStockData(): Promise<void> {
    try {
      this.isLoading = true;
      this.stockData = await this.stockService.getStockQuote('ATO.PA');
      this.isLoading = false;
    } catch (error) {
      this.errorMessage = 'Failed to fetch stock data. Please try again.';
      this.isLoading = false;
    }
  }
}
