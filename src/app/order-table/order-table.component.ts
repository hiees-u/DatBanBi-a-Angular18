import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {
  @Output() isCloseFrm = new EventEmitter<boolean>();
  @Input() profileTable: any;

  constructor(private http: HttpClient) { }

  // post API
  handleOrderTable() {
    this.postDatBan();
  }

  datBan = {
    'tenkh': '',
    'sdt': '',
    'ghichu': '',
    'thoigianden': '',
    'maban': '',
  }

  postDatBan() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.datBan.maban = this.profileTable.maban;
    this.http.post('https://localhost:7248/api/Datbans', this.datBan, { headers })
      .subscribe((resp) => {
        console.log('Data posted successfully:', resp);
        //Cập Nhật lại Trạng thái bàn thành false(có người đặt);
        this.putTable();
      }),
      (error: any) => {
        console.error('Error posting data:', error);
      }
  }

  putTable() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //cập nhật trạng thái table
    this.profileTable.tinhtrang = true;
    this.http.put('https://localhost:7248/api/Bans/'+this.datBan.maban, this.profileTable, {headers} )
    .subscribe((resp) => {
      console.log('Data Put successfully:', resp);
    }),
    (error: any) => {
      console.error('Error posting data:', error);
    }
    //thoát from order
    this.sendIsCloseFrm();
  }

  sendIsCloseFrm() {
    this.isCloseFrm.emit(false);
    this.datBan.tenkh = this.datBan.sdt = this.datBan.ghichu = this.datBan.thoigianden = '';
  }
}
