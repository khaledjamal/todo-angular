import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './TodoList';

@Injectable()
export class TodoService {
  readonly getUrl = 'http://localhost:8080/todo';
  readonly postUrl = 'http://localhost:8080/todo';

  constructor (private http: HttpClient) {}

  getTodoList() {
    return this.http.get<TodoList>(this.getUrl);
  }


  postTodoList(todoList) {
    return this.http.post<TodoList>(this.postUrl, todoList);
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an ErrorObservable with a user-facing error message
  //   return new ErrorObservable(
  //     'Something bad happened; please try again later.');
  // };
}