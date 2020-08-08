import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  isSignedIn:boolean = false;

  constructor(private firebaseService:FirebaseService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null){
    this.user = JSON.parse(localStorage.getItem('user'))
    this.isSignedIn = true
  }else{
    this.isSignedIn = false
  }
  console.warn('In home', this.isSignedIn);
  }

  logout(){
    this.firebaseService.logout()
    this.router.navigate(['/login'])
    this.isSignedIn = false
    console.warn(this.isSignedIn);
  }

}
