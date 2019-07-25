import { Component, OnInit, ViewChild, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { EditUserComponent } from './edit-user/edit-user.component';

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
export class ListComponent implements OnInit, OnDestroy {

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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  data = [];
  getUsername: string;
  subscriptions: Subscription[] = [];
  showSpinner: boolean;
  constructor(
    private listService: ListService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.subscriptions.push(
      this.listService.getList().subscribe(res => {
        this.showSpinner = true;
        setTimeout(() => {
          this.data = Object.assign(res);
          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
          this.showSpinner = false;
        }, 600);
      })
    );

    this.subscriptions.push(
      this.listService.currentUserName.subscribe(message => this.getUsername = message)
    );
  }

  editUser(element){
    element['address'] = element.address.street + element.address.city;
    const dialogRef = this.dialog.open(EditUserComponent, {
      autoFocus: true,
      disableClose: true,
      width: '50%',
      panelClass: 'delete-dialog',
      data: element
    });
    dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
