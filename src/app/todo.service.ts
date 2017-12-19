import { Injectable } from '@angular/core';

import { Todo } from './todo'
import { TODOS } from './mock-todos'

@Injectable()
export class TodoService {

  constructor() { }

  getTodos():Todo[] {
    return TODOS;
  }

  addTodo(todo: Todo) {
    TODOS.push(todo);
  }
}