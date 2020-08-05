import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;


  constructor() { }

  ngOnInit(): void {
  }


  //set dynamic classes
  setClass(){
    let classes = {
      'is-complete': this.todo.completed,
    }
    return classes;
  }

  onToggle(){
    this.todo.completed = !this.todo.completed;
  }

  onDelete(){
    console.warn('Detete todo')
  }

}
