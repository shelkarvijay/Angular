import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MaterialModule } from 'src/app/shared/material/material.module';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialModule,
        ],
        declarations: [LoginComponent]
      })
        .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(this.usernamePattern)]],
      password: ['', [Validators.pattern(this.passwordPattern)]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
