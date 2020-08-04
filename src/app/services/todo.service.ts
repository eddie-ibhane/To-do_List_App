import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoRecords(){
    return [
    {
      id: 1,
      description: 'Build a todo list',
      completed: false
    },
    {
      id: 2,
      description: 'Add more items to list',
      completed: false
    },
    {
      id: 3,
      description: 'commit your work to github',
      completed: false
    }
  ]
  }
}
