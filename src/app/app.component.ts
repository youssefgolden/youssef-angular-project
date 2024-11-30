import { Component } from '@angular/core';
import { StockComponent } from './components/stock/stock.component';
@Component({
  selector: 'app-root',
  standalone: true, // Déclare AppComponent comme Standalone
  imports: [StockComponent], // Ajoutez StockComponent ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youssef-angular-project';
}
