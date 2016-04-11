export class Todo {

  todo = {
    desc: '',
    date: '',
    completed: false
  };

  todos = [];

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
