import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AuthGuard } from './auth.guard';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent} from './components/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'home',
    component:HomeComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: 'addtodo',
    component:AddTodoComponent
  },
  {
    path: 'todos',
    component:TodosComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: 'update/:id',
    component:UpdateComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path: '**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
