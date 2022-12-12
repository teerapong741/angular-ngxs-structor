import { Injectable } from '@angular/core';
import {
  catchError,
  interval,
  Observable,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { Todo } from './store';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  get(options?: { delay: number; getError: boolean }): Observable<Todo[]> {
    return interval(options?.delay || 0).pipe(
      catchError((err) => throwError(() => err)),
      switchMap(() => {
        const TO_DOS: Todo[] = [
          { id: '1', detail: '', is_complete: false, subject: 'test' },
        ];
        return of(TO_DOS);
      })
    );
  }
}
