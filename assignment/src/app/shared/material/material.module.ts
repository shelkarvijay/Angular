import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatIconModule, MatTooltipModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const MaterialModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }
