import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent ,UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users= DUMMY_USERS ;
}
