import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id)
    this.todoService
      .getCurrentParams(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.updateInput = new FormGroup({
          description: new FormControl(data['description']),
        });
        // console.warn(this.updateInput.value);
      });
  }

  onClick() {
    this.todoService
      .updateTodo(this.route.snapshot.params.id, this.updateInput.value)
      .subscribe((todo) => {
        console.warn('success',todo);
        this.router.navigate(['/todos'])
        });
  }
}
