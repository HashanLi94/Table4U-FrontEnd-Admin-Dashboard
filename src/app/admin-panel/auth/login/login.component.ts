import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logIn = new FormGroup({
      username : new FormControl('', [
          Validators.required, Validators.email]),
      password : new FormControl('', Validators.required)
    })
  }

  onLogIn(logInValues) {
    this.router.navigate(['/admin/dashboard']);
  }


}
