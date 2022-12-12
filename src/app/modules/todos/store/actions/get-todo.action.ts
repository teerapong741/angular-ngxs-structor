import { StateContext } from '@ngxs/store';
import { Action, Selector } from '@ngxs/store';
import { asapScheduler, catchError, map, tap } from 'rxjs';
import { TodosStateModel } from '..';
import { TodosService } from '../../todos.service';

export class GetTodoList {
  static readonly type = '[todo] Get List';
}

export class GetTodoListSuccess {
  static readonly type = '[todo] Get List Success';
}

export class GetTodoListFailed {
  static readonly type = '[todo] Get List Failed';
}

export class TodoEffect {
  constructor(private _todosService: TodosService) {}

  @Selector()
  static getUsers(state: TodosStateModel) {
    return state.todos;
  }

  @Action(GetTodoList)
  getTodoList(ctx: StateContext<TodosStateModel>) {
    return this._todosService.get().pipe(
      map((res) =>
        asapScheduler.schedule(() => ctx.dispatch(new GetTodoListSuccess()))
      ),
      catchError(() => ctx.dispatch(new GetTodoListFailed()))
    );
  }

  @Action(GetTodoListSuccess)
  getTodoListSuccess(ctx: StateContext<TodosStateModel>) {}

  @Action(GetTodoListFailed)
  getTodoListFailed(ctx: StateContext<TodosStateModel>) {}
}
