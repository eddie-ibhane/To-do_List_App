import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:any = [];
  constructor(private todoContent:TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoContent.todoRecords()
  }

}
