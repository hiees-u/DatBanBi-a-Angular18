import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item-table',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './item-table.component.html',
  styleUrl: './item-table.component.css'
})
export class ItemTableComponent {
  @Input() profileTable: any;
}
