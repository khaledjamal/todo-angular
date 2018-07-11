import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {TodoService} from './todo.service'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
//import { ApplicationRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  providers: [TodoService],
  styles: [
    `ul li {
      list-style: none;
    }
    .completed {
      text-decoration: line-through;
    }`
  ]
})
export class AppComponent {

  name: string = '';

  todoItems: TodoItem[]=[];

  constructor(private todoService: TodoService) {
    this.retieveTodoList();
  }

  retieveTodoList() {
    this.todoService.getTodoList().subscribe(data => this.extractInfoFromData(data));
  }

  // extractInfoFromData: data:
  // {"todoItems":[{"description":"share idea with team","completed":false},
  //               {"description":"write unit tests","completed":false},
  //               {"description":"refactor code","completed":true}],
  // "name":"John"}
  extractInfoFromData(data: TodoList) {
    console.log("extractInfoFromData.start");
    console.log("extractInfoFromData: data: " + JSON.stringify(data));

    this.todoItems = data.todoItems;
    this.name=data.name;
  }


  addTodo(label) {
    //let todoItemsCopy = {...this.todoItems};
    //let todoItemsCopy = (JSON.parse(JSON.stringify(this.todoItems)));
    let todoItemsCopy = this.clone(this.todoItems);
    let newItem: TodoItem = {description: label, completed: false};
    todoItemsCopy.push(newItem);

    //let todoList: TodoList = {name: this.name, todoItems:this.todoItems};
    let todoList: TodoList = {name: this.name, todoItems:todoItemsCopy};

    // if the post was successful, add the new todo item to the list in the model in the browser.
    // otherwise, the list will not have the new item because it was not saved in the server.
    // so there is no point in making it to appear in the client.
    let successFunction = next => this.todoItems.push(newItem);
    let errorFunction = error => console.log("error: " + JSON.stringify(error));

    this.todoService.postTodoList(todoList).subscribe(successFunction, errorFunction);
  }

  removeTodo(i) {
    this.todoItems.splice(i, 1);
  }

  toggleCompletion(i) {
    let todoItemsCopy = this.clone(this.todoItems);

    let todoItem = todoItemsCopy[i];
    todoItem.completed = !todoItem.completed;

    let todoList: TodoList = {name: this.name, todoItems:todoItemsCopy};

    // if the post was successful, add the new todo item to the list in the model in the browser.
    // otherwise, the list will not have the new item because it was not saved in the server.
    // so there is no point in making it to appear in the client.
    let successFunction = next => {
      this.toggleCompletedState(i);
    };

    // we need to use setTimout() method in order to undo the change in checked status of the checkbox
    // for more info, please see
    // https://stackoverflow.com/questions/43202727/uncheck-checkbox-in-angular-2-ngmodelchange-event
    let errorFunction = error => {
      console.log("an error occured while saving: " + JSON.stringify(error));
      console.log("todo.completed:" + this.todoItems[i].completed);
      this.toggleCompletedState(i);
      setTimeout(()=>{ console.log("inside setTimeout"); this.toggleCompletedState(i); }, 0);
      //setTimeout(()=>{},0);
    };

    this.todoService.postTodoList(todoList).subscribe(successFunction, errorFunction);
  }

  toggleCompletedState(i) {
    let item = this.todoItems[i];
    item.completed = !item.completed;
  }

  // todo: replace this clone method with another one that has better performance.
  // this method is not good for large objects.
  clone(obj: any) : any {
    let result = (JSON.parse(JSON.stringify(obj)));
    return result;
  }
}

