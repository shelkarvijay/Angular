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
  noData: boolean;
  getDataApiError: boolean;
  constructor(
    private listService: ListService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.subscriptions.push(
      // get all data from api
      this.listService.getList().subscribe(customerData => {
        this.showSpinner = true;
        if (customerData) {
          setTimeout(() => {
            this.data = Object.assign(customerData);
            if (this.data.length) {
              this.dataSource = new MatTableDataSource(this.data);
              this.dataSource.paginator = this.paginator;
              this.showSpinner = false;
              this.noData = false;
              this.getDataApiError = false;
            } else {
              this.showSpinner = false;
              this.noData = true;
            }
          }, 600);
        } else {
          this.showSpinner = false;
          this.noData = true;
        }
      },
      error => {
        this.getDataApiError = true;
        console.log(error);
      })
    );

    // get username from LoginComponent and set here
    this.subscriptions.push(
      this.listService.currentUserName.subscribe(username => {
        return this.getUsername = username ? username : '';
      })
    );
  }

  editUser(element) {
    // concat address as street and city
    element['address'] = element.address.street + element.address.city;
    
    const dialogRef = this.dialog.open(EditUserComponent, {
      autoFocus: true,
      disableClose: true,
      width: '50%',
      panelClass: 'edit-dialog',
      data: element
    });
    dialogRef.afterClosed().subscribe(closeDialog => {
      if (!closeDialog) {
        return;
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
