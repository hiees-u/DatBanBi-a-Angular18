import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListTableComponent } from './list-table/list-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QL_QuanBi_a_Ang';
}
