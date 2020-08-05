import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://localhost:3000/todos';

  constructor(private http:HttpClient) { }

  getTodos(){
    return this.http.get(this.url)
  }

  saveTodo(todo){
    return this.http.post(this.url, todo);
  }
}
