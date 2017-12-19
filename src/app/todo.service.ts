import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Todo } from './todo'
import { TODOS } from './mock-todos'

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;

  constructor(private afs: AngularFirestore) { }

  getTodos():Observable<Todo[]> {
    this.todosCollection = this.afs.collection<Todo>('todos');
    return this.todosCollection.valueChanges();
  }

  addTodo(todo: Todo) {
    this.todosCollection.doc(todo.id).set(todo);
  }

  updateTodo(todo: Todo) {
    this.afs.doc<Todo>(`todos/${todo.id}`).update(todo);
  }

  deleteTodo(todoId: String) {
    this.afs.doc<Todo>(`todos/${todoId}`).delete();
  }
}