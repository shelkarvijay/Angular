import { Component, OnInit } from '@angular/core';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { MatDialog } from '@angular/material';
import { SecComponent } from './sec/sec.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HelloWord';
  animal: string;
  name: string;
  constructor(
    private dialog: MatDialog
  ){

  }
  ngOnInit(){

    console.log(this.title);
  }
 
}
