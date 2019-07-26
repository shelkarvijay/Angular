import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [EditUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    component.editUserForm = formBuilder.group({
      id: [this.userModel.id, [Validators.required, Validators.pattern(/^[0-9]{1,}$/)]],
      name: [this.userModel.name],
      phone: [this.userModel.phone, [Validators.required]],
      username: [this.userModel.username],
      email: [this.userModel.email, [Validators.required]],
      address: [this.userModel.address],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
