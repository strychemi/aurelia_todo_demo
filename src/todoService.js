export class todoService {
  constructor() {
    this.todo = {
      desc: '',
      date: '',
      completed: false
    };

    this.todos = [];
  }
}
