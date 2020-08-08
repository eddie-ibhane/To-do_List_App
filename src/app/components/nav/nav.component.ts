import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth = false
  @Output() isLogout = new EventEmitter<void>()

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.isAuth = false
  }

}
