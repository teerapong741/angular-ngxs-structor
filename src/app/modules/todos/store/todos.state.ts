import { Injectable } from '@angular/core';
import { State } from '@ngxs/store/src/decorators/state';
import { TodosService } from '../todos.service';
import { TodoEffect } from './actions';
import { TodosStateModel } from './models/todos.model';

const initial: TodosStateModel = {
  todos: [],
};

@State<TodosStateModel>({
  name: 'todos',
  defaults: initial,
})
@Injectable()
export class TodosState extends TodoEffect {
  constructor(_todosService: TodosService) {
    super(_todosService);
  }
}
