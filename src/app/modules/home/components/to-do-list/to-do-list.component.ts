import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [
    { task: 'Nova task', checked: true },
    { task: 'Nova task 2', checked: false },
  ];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public setEmitTaskList(event: string): void {
    if (event.length) this.taskList.push({ task: event, checked: false });
  }

  public deleteTaskListItem(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskListItems(): void {
    const confirm = window.confirm('Você realmente deseja deletar tudo?');
    if (confirm) this.taskList = [];
  }

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm('Task vazia, deseja deletar ela?');

      if (confirm) {
        this.deleteTaskListItem(index);
      }
    }
  }
}
