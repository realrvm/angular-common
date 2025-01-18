import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  retry,
  throwError,
  timeout,
  TimeoutError,
  timer,
} from 'rxjs';

const URL = 'https://jsonplaceholder.typicode.com/todos/';
const TIMEOUT = 1000;
const ATTEMPTS = 3;

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly http = inject(HttpClient);

  public readonly todos$ = this.http.get<Todo[]>(URL).pipe(
    timeout(TIMEOUT),
    retry({
      count: ATTEMPTS,
      delay: (err, attemptNum) => timer(1000 * attemptNum),
    }),
    catchError(handleErrorWithTimeout)
  );
}

// вариант 1
export function setErrorMessage(
  err: HttpErrorResponse,
  dataName?: string
): string {
  let errorMessage = '';
  const name = dataName ?? '';

  if (err) {
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      const status = err.status;

      if (status === 404)
        errorMessage = `${name} data was not found. Please try again later.`;
      if (status > 500 && status < 600)
        errorMessage = `Server error. Please try again later.`;
    }
  }

  return errorMessage;
}

// вариант 2
function handleError(err: HttpErrorResponse) {
  const errorMsg = err.error;

  if (err.status === 0) {
    // ...
    console.log(errorMsg);
  } else {
    //...
    console.log(errorMsg);
  }

  return throwError(() => errorMsg);
}

// c таймаутом
function handleErrorWithTimeout(err: HttpErrorResponse | TimeoutError) {
  const errorMessage = '';

  if (err instanceof TimeoutError) {
    console.log('timeout error: ', err.message);

    return throwError(() => errorMessage);
  } else return handleError(err);
}
