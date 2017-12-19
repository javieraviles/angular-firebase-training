import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';

import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = TODOS;
  newTodoTitle: string = "";
  newTodo: Todo;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.newTodo = {
      id: this.todos.length+1,
      title: this.newTodoTitle,
      completed: false
    }
    this.todos.push(this.newTodo);
    this.newTodoTitle = "";
  }

}