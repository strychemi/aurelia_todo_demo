import {inject} from 'aurelia-framework'; // the inject container for Aurelia
import {todoService} from './todoService'; // import todo service (persistent data)

// dependcy injection via inject decorator
// passes todoService instance directly to constructor
@inject(todoService)
export class Todo {

  constructor(todoService) {
    this.todo = todoService.todo;
    this.todos = todoService.todos;
  }

  addTodo() {
    this.todos.push({
      desc: this.todo.desc,
      date: this.todo.date,
      completed: false
    });
    this.todo.desc = '';
    this.todo.date = '';
    this.todo.completed = false;
  }

  deleteTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
