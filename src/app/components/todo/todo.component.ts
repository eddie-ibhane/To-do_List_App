import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();


  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }


  //set dynamic classes
  setClass(){
    let classes = {
      'is-complete': this.todo.completed,
    }
    return classes;
  }

  onToggle(todo){
    // Toggle in UI
    todo.completed = !todo.completed;
    //Toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.warn(todo);
    })

  }

  onDelete(todo){
    this.deleteTodo.emit(todo)
  }

}
