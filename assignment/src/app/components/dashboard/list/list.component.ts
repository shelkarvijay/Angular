import { Component, OnInit, ViewChild, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { EditUserComponent } from './edit-user/edit-user.component';
import Swal from 'sweetalert2';

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

  displayedColumnsArray: string[] = [
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
  indexOfElement: any;
  customerDataLength: number;
  prevData: any[];
  constructor(
    private listService: ListService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getData();
    // get username from LoginComponent and set here
    this.subscriptions.push(
      this.listService.currentUserName.subscribe(username => {
        return this.getUsername = username ? username : '';
      })
    );
  }

  getData() {
    this.subscriptions.push(
      // get all data from api
      this.listService.getList().subscribe(customerData => {
        this.showSpinner = true;
        if (customerData) {
          setTimeout(() => {
            this.filteredData(customerData);
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
  }

  filteredData(customerData, isUpdate?: any) {
    let prevData = this.data;
    if (isUpdate) {
      const updatedId = customerData.updatedId;
      for (let element in prevData) {
        if (prevData[element].id === updatedId) {
          prevData[element] = customerData;
          prevData[element]['address'] = { city: customerData.address };
        }
      }
    } else {
      this.data = Object.assign(customerData);
      prevData = this.data;

    }
    if (prevData.length) {
      console.log(prevData)
      // prevData['address'] = ;
      this.dataSource = new MatTableDataSource(prevData);
      this.customerDataLength = this.dataSource.filteredData.length;
      this.dataSource.paginator = this.paginator;
      this.showSpinner = false;
      this.noData = false;
      this.getDataApiError = false;
    } else {
      this.showSpinner = false;
      this.noData = true;
    }
  }

  editUser(element, index) {
    const data = element;
    // concat address as street and city
    data['address'] = data['address']['street'] + data['address']['city'];
    const dialogRef = this.dialog.open(EditUserComponent, {
      autoFocus: true,
      disableClose: true,
      width: '50%',
      panelClass: 'edit-dialog',
      data: data
    });
    dialogRef.afterClosed().subscribe(dialogValue => {
      // console.log(dialogValue);
      if (dialogValue === 'closeDialog') {
        this.filteredData(this.data);
      } else {
        this.indexOfElement = index;
        this.filteredData(dialogValue, true);
      }
      if (!dialogValue) {
        return;
      }
    });
  }

  deleteUser(element, index) {
    Swal.fire({ title: 'Do you really want to delete?', showCancelButton: true, showCloseButton: true }).then(result => {
      if (result.value) {
        let deleteData = element.id;
        const index = this.data.indexOf(element);
        this.data.splice(index, 1);
        this.filteredData(this.data, false);
      } else {

      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
