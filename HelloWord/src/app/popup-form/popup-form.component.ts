import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PopupFormModel } from '../model/popup-form.model';
import {MatSort, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})
export class PopupFormComponent implements OnInit {
  empFormGroup: FormGroup;
  popupFormModel: PopupFormModel;
  // pattern = /^[a-zA-Z0-9 ,'.:\-''_""()\n&[\]]+$/;
  constructor(
    public dialogRef: MatDialogRef<PopupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  get f() { return this.empFormGroup.controls; }

  submit() {
    const formCtrlEmployeeName = this.empFormGroup.get('formCtrlEmployeeName').value;
    this.popupFormModel = formCtrlEmployeeName;
    localStorage.setItem('user', JSON.stringify(this.popupFormModel));
    console.log(localStorage.getItem('user'));
    // this.createForm();
  }
  
  createForm(){
    this.empFormGroup = this.formBuilder.group({
      formCtrlEmployeeName: ['',Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]{3,8}$')])]
      // EmployeeName: ['',],
    });
  }

}
