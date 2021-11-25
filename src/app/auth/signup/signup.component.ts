import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../matchPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private matchPassword: MatchPassword) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name:new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9]+$/)]),
      confirmPassword: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9]+$/)]),
      acceptTerms: new FormControl(true)
    },{ validators: [this.matchPassword.validate] }
    )
  }
}
