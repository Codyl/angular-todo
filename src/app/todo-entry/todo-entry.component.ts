import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css'],
})
export class TodoEntryComponent {
  @Output() todoAdded = new EventEmitter<{ name: string; id: number }>();
  todoName = '';

  onCreateTodo() {
    console.log(this.todoName);
    this.todoAdded.emit({
      name: this.todoName,
      id: Date.now(),
    });
    this.todoName = '';
  }
}
