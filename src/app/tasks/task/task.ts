import { Component,Input, EventEmitter, Output, inject} from '@angular/core';
import { UserComponent } from '../../user/user';
import { App } from '../../app';
import { DUMMY_USERS } from '../../dummy-users';
import { type NewTaskData, Task } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [Card , DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'


})
export class TaskComponent {
  @Input({required: true}) task!: Task ;
    private taskServices = inject(TasksService)
  OnCompleteTask(){
    this.taskServices.removeTask(this.task.id);
  }
}
export type { Task };

