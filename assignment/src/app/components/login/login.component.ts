import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { LoginModel } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginModel]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernamePattern: any = /^[ A-Za-z0-9_@!@#$&*.]*$/;
  passwordPattern: any = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{2,}$/;
  username: string = 'fdsf';
  message: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private listService: ListService,
    private loginModel: LoginModel
  ) { }

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      username: [this.loginModel.username, [Validators.pattern(this.usernamePattern)]],
      password: [this.loginModel.password, [Validators.pattern(this.passwordPattern)]]
    })
  }

  login(formValues) {
    const username = formValues.username;
    this.listService.getUserName(username);
    this.router.navigateByUrl('/dashboard');
  }

}
