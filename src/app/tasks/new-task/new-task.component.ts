import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  private tasksService = inject(TasksService);

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
