import { Injectable } from '@angular/core';

import { Todo } from './todo'
import { TODOS } from './mock-todos'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos():Observable<Todo[]> {
    return of(TODOS);
  }

  addTodo(todo: Todo) {
    TODOS.push(todo);
  }
}