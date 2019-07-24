import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernamePattern: any = /^[ A-Za-z0-9_@!@#$&*.]*$/;
  passwordPattern: any = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{2,}$/;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      username: ['', [Validators.pattern(this.usernamePattern)]],
      password: ['', [Validators.pattern(this.passwordPattern)]]
    })
  }

  login(formValues) {
    const username = formValues.username;
    const password = formValues.password;
    if (username === '' && password === '') {
      console.log('username or password does not match');
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
