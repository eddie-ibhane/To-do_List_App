import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from './../../services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  // addTodo = new FormGroup({
  //   description: new FormControl('')
  // })

  constructor(private todoService:TodoService) { }

  description:string;

  ngOnInit(): void {
  }

  onClick(){
    const todo = {
      description: this.description,
      completed: false
    }
    // console.warn(todo)
    this.addItem.emit(todo)
  }

  // postTodo(todo){
  //   this.todoService.saveTodo()
  // }

}
