import { TodoItem } from "./TodoItem";

export interface TodoList {
  name: string;
  todoItems: TodoItem[];
}