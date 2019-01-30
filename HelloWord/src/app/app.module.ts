import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule, MatTooltipModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatInputModule, MatCardModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputStyleDirective } from './popup-form/input-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './users/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SecComponent,
    PopupFormComponent,
    InputStyleDirective,
    SecComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatTooltipModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,    
    MatCardModule, AppRoutingModule
  ],
  entryComponents: [
    PopupFormComponent,
    SecComponent
  ],
  providers: [
    { provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
