import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavComponent } from './components/nav/nav.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateComponent } from './components/update/update.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TodosComponent,
    TodoComponent,
    NavComponent,
    AddTodoComponent,
    UpdateComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAtT6YMhcrgA0GpB0dUldHpi81AS9eNrE4",
      authDomain: "todo-list-app-37d1e.firebaseapp.com",
      databaseURL: "https://todo-list-app-37d1e.firebaseio.com",
      projectId: "todo-list-app-37d1e",
      storageBucket: "todo-list-app-37d1e.appspot.com",
      messagingSenderId: "470001916732",
      appId: "1:470001916732:web:36f945cc8fef8979fe5c39"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
