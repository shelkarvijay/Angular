import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  userModel: UserModel;
  updatedId: any;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userModel = this.data ? this.data : this.data = [];
    this.editUserForm = this.createForm();
    const addressControl = this.editUserForm.get('address');
    const city = this.data.address.city ? this.data.address.city : '';
    const street = this.data.address.street ? this.data.address.street : '';
    addressControl.setValue(city + '' + street);
    this.updatedId = this.editUserForm.get('id').value;
  }

  createForm() {
    return this.formBuilder.group({
      id: [this.userModel.id, [Validators.required, Validators.pattern(/^[0-9]{1,}$/)]],
      name: [this.userModel.name],
      phone: [this.userModel.phone, [Validators.required]],
      username: [this.userModel.username],
      email: [this.userModel.email, [Validators.required]],
      address: [{ city: this.userModel.address.city, street: this.userModel.address.street }],
    });
  }

  update(formValues) {
    formValues.id = parseInt(formValues.id);
    this.closeDialog(formValues, this.updatedId);
  }

  closeDialog(value, updatedId?: any) {
    if (updatedId) { value['updatedId'] = updatedId; }
    this.dialogRef.close(value);
  }
}
