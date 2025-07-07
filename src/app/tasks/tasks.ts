import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task'; 
import { App } from '../app';
import { UserComponent } from '../user/user';
import { title } from 'process';
import { NewTask } from './new-task/new-task';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service'; 

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent , NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name?: string;
  isAddingTask = false ;

  constructor( private tasksService: TasksService){}


   get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

 OnCompleteTask( id: string){
   
 }

 OnStartAddTask() {
  this.isAddingTask= true ;

}
OnCloseAddTask(){
  this.isAddingTask = false ;
}

}
