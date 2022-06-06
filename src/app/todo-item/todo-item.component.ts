import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Output() todoDeleted = new EventEmitter();
  @Input() taskNumber;
  @Input() id;
  @Input() todoName;
  todoDone = false;

  onDeleteTodo() {
    console.log('onDelete', this.todoName);
    this.todoDeleted.emit({
      todoName: this.todoName,
      todoId: this.id,
    });
  }
}
