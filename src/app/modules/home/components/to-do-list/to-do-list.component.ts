import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Nova task', checked: true },
    { task: 'Nova task 2', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  public deleteTaskListItem(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskListItems(): void {
    const confirm = window.confirm('Você realmente deseja deletar tudo?');
    if (confirm) this.taskList = [];
  }
}
