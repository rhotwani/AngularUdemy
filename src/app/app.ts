import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./tasks/task/task";
import { Tasks } from './tasks/tasks';
// import { Task } from "./task/task"; // Removed because 'Task' is not exported from './task/task'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,UserComponent,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users= DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  Onselectuser(id: string){
    this.selectedUserId = id ;
  }
}
