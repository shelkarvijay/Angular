import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { filter } from 'minimatch';
import { LoginComponent } from '../../login/login.component';

export interface PeriodicElement {
  id: number;
  name: string;
  phone: number;
  username: string;
  email: string;
  address: string;
  paginatorTotal: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'phone',
    'username',
    'email',
    'address',
    'actions'
  ];

  // dataSource: any = [];
  dataSource: MatTableDataSource<[]>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data = [];
  getUsername: string;
  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.listService.getList().subscribe(res => {
      this.data = Object.assign(res);
      // console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data); 
      this.dataSource.paginator = this.paginator;
    });

    this.listService.currentUserName.subscribe(message => this.getUsername = message)
  }

}
