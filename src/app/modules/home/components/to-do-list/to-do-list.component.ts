import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    // { task: 'Nova task', checked: true },
    // { task: 'Nova task 2', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
