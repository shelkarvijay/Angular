import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    DashboardModule
  ]
})
export class CustomerModule { }
