import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn = false
  error:any;
  user:any

  loginUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private firebaseService:FirebaseService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignin(email:string, password:string){
    await this.firebaseService.signin(email, password)

    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    this.router.navigate(['/home'])
    console.log('signed in',this.isSignedIn)
  }

}
