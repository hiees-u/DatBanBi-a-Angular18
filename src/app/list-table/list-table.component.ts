import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemTableComponent } from '../item-table/item-table.component';
import { NgFor } from '@angular/common';
import { DetailTableComponent } from '../detail-table/detail-table.component';

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [
    ItemTableComponent,
    NgFor,
    DetailTableComponent
  ],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.css'
})
export class ListTableComponent implements OnInit {
  
  constructor(private http:HttpClient) {}

  tables: any[] = [];

  tablesShow: any[] = this.tables;

  SelectCategoryTables = 0;

  categoryTables = [
    {
      MaLoai: 0,
      TenLoai: 'Tất Cả'
    },{
      MaLoai: 1,
      TenLoai: 'Bida Băng'
    },{
      MaLoai: 2,
      TenLoai: 'Bida Lỗ'
    }
  ]

  isShow: boolean = true;

  tableDetail: any;

  ngOnInit(): void {
    this.getAllTable();
    console.log(this.tables);
  }
  //https://localhost:7248/api/Bans

  getAllTable() {
    this.http.get<any>('https://localhost:7248/api/Bans').subscribe((res:any)=>(
      this.tables = res
    )), (err: any) => {
      console.log(err);      
    }
  }

  changetaler(tableDetail: any) {
    this.tableDetail = tableDetail;
  }

  changeCateTable(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.SelectCategoryTables = parseInt(selectedValue, 10);
    this.performActionBasedOnSelection();
  }
  performActionBasedOnSelection() {
    // lọc tables theo loại
    if(this.SelectCategoryTables == 1) {
      // Bi-a Băng
      this.tablesShow = this.tables.filter(table => table.loaiban === true)
    } else if (this.SelectCategoryTables == 2) {
      // Bi-a Lỗ
      this.tablesShow = this.tables.filter(table => table.loaiban === false)
    } else {
      this.tablesShow = this.tables;
    }   
  }
}
