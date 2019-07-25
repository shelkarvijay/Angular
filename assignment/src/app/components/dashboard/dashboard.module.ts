import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListComponent } from './list/list.component';
import { MatTableModule, MatIconModule, MatTooltipModule, MatCardModule, MatPaginatorModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { EditUserComponent } from './list/edit-user/edit-user.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [ListComponent, EditUserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  entryComponents: [
    EditUserComponent
  ]
})
export class DashboardModule { }
