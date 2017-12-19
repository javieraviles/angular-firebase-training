import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

import { Todo } from '../todo';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  newTodoTitle: string = "";
  newTodo: Todo;

  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe( todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    this.newTodo = {
      id: this.todos.length+1,
      title: this.newTodoTitle,
      completed: false
    }
    this.todoService.addTodo(this.newTodo);
    this.newTodoTitle = "";
  }

}