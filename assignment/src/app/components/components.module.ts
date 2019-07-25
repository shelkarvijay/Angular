import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule, MatInputModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
