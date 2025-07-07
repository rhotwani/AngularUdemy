import { Component, Output, EventEmitter, signal, inject, Input} from '@angular/core';
import { Tasks } from '../tasks';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from  '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate= '';
  private tasksService = inject(TasksService);

onCancel(){
  this.close.emit();
}


OnSubmit(){
this.tasksService.addTask({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date: this.enteredDate
}, 
this.userId
   );
   this.close.emit();
  }
;
}

