import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SignupserviceService} from './signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;

  constructor(private router: Router, private signupserviceService: SignupserviceService) { }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
          Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      nic: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),

    });
  }

  onCreateNewAccount(signUpValues) {
    const admin = {
      'firstName' : this.signUp.get('firstName').value,
      'lastName' : this.signUp.get('lastName').value,
      'email' : this.signUp.get('email').value,
      'nic' : this.signUp.get('nic').value,
      'password' : this.signUp.get('password').value,
      'contactNo' : this.signUp.get('number').value,
    }
    return  this.signupserviceService.saveNewAdministrator(admin)
        .subscribe( data => {
          if (data) {
            console.log('You have Created New Account SuccessFully!!!');
            this.router.navigate(['/login'])
          }
        },
            (error: Response) => {
          console.log(error);
            })

  }



}
