import { Component, OnInit } from '@angular/core';
import { PopupFormComponent } from '../popup-form/popup-form.component';
import { MatDialog } from '@angular/material';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private dialog: MatDialog,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  openDialog(): void {
    console.log("Dialog call");
   this.dialog.open(PopupFormComponent, {
      width: '400px',
      height: ''

    });


  }

}
