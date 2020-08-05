import { Todo } from './../models/Todo';
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

  toggleCompleted(todo){
    return this.http.put(`${this.url}/${todo.id}`,todo)
  }

  deleteTodo(todo){
    return this.http.delete(`${this.url}/${todo.id}`, todo)
  }
}
