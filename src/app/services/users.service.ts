import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.post(this.url, user)
  }

}
