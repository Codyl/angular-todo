import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  todoList = [];
  createTodo(todo) {
    this.todoList.push(todo);
    console.log(this.todoList);
  }
  deleteTodo(deleteObj) {
    console.log(deleteObj, this.todoList);
    this.todoList = this.todoList.filter(
      (todo) => todo.id !== deleteObj.todoId
    );
  }
}
