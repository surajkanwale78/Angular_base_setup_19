import { Component } from '@angular/core';
import { CurrencyPipe } from '../../pipe/currency.pipe';

@Component({
  selector: 'app-user-table',
  imports: [CurrencyPipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

}
