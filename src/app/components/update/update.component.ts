import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  updateInput = new FormGroup({
    description: new FormControl(''),
  });

  constructor(
    private router: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id)
    this.todoService
      .getCurrentParams(this.router.snapshot.params.id)
      .subscribe((data) => {
        this.updateInput = new FormGroup({
          description: new FormControl(data['description']),
        });
        // console.warn(this.updateInput.value);
      });
  }

  onClick() {
    this.todoService
      .updateTodo(this.router.snapshot.params.id, this.updateInput.value)
      .subscribe((todo) => {
        console.warn(todo);
      });
  }
}
