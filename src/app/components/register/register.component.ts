import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.usersService.registerUser(this.registerUser.value).subscribe( data => {
      console.warn('data from server',data)
    })

  }

}
