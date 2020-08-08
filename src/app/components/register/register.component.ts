import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignedIn:boolean = false
  error: any;

  constructor(private firebaseService:FirebaseService, private router:Router, private _location:Location) { }

  ngOnInit(): void {
    if(localStorage.getItem('users') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email, password)
    .then(success => {
      console.warn(success);
      this.router.navigate(['/home']);
    })
    .catch(err => {
      console.warn(err.message);
      this.error = err.message;
    });

    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }

  cancel(){
    this._location.back();
  }

}
