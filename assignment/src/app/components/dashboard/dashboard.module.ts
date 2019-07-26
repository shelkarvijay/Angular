import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListComponent } from './list/list.component';
import { EditUserComponent } from './list/edit-user/edit-user.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@NgModule({
  declarations: [ListComponent, EditUserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    EditUserComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ]
})
export class DashboardModule { }
