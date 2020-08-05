import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:any = [];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todo)=>{
      this.todos = todo;
    })
  }

  addItem(todo){
    this.todoService.saveTodo(todo).subscribe((todo)=> {
      this.todos.push(todo);
      console.warn('Result',todo);
     })
  }

  deleteTodo(todo){
    //Remove todo from UI
    this.todos = this.todos.filter(t => t.id !== todo.id );
    console.warn(todo.id);
    //Remove todo from server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
