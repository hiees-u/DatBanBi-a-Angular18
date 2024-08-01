import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { OrderTableComponent } from '../order-table/order-table.component';

@Component({
  selector: 'app-detail-table',
  standalone: true,
  imports: [NgClass, CurrencyPipe, OrderTableComponent],
  templateUrl: './detail-table.component.html',
  styleUrl: './detail-table.component.css'
})
export class DetailTableComponent implements OnInit, OnChanges {
  ngOnInit(): void {
  }
  @Input() profileTable: any = null;

  previosProdileTable: any = null;
  
  isShow: boolean = true;

  isShowFrm: any = false;

  changeShow() {
    this.isShow = !this.isShow;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['profileTable']) {
      const currentProfileTable = changes['profileTable'].currentValue;

      if(currentProfileTable !== this.previosProdileTable) {
        this.isShow = true;
        this.previosProdileTable = currentProfileTable;
      }
    }
  }

  showForm() {
    this.isShowFrm = !this.isShowFrm;
  }

  receiveIsCloseFrm(bol: boolean) {
    this.isShowFrm = bol;
  }

}
