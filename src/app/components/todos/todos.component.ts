import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos

  constructor(private todoLists:TodoService) { }

  ngOnInit(): void {
    this.todoLists.getTodos().subscribe((todo)=>{
      this.todos = todo;
    })
  }

  addItem(todo){
    this.todoLists.saveTodo(todo).subscribe((todo)=> {
      this.todos.push(todo);
      console.warn('Result',todo);


     })
  }

}
