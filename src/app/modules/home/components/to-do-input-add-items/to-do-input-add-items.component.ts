import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-items',
  templateUrl: './to-do-input-add-items.component.html',
  styleUrls: ['./to-do-input-add-items.component.scss'],
})
export class ToDoInputAddItemsComponent {
  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  public submitItemTaskList(): void {
    this.addItemTaskList = this.addItemTaskList.trim();
    this.emmitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = '';
  }
}
