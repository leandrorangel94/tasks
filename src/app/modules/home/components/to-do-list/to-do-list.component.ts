import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
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

  public setLocalStorage(): void {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
