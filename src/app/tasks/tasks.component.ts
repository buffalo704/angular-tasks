import { Component, computed, input, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) userId!: string;
  // @Input({ required: true }) name!: string;

  userId = input.required<string>();
  name = input.required<string>();

  isAddingTask = false;
  private tasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
