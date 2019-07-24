import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListComponent } from './list/list.component';
import { MatTableModule, MatIconModule, MatTooltipModule, MatCardModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class DashboardModule { }
