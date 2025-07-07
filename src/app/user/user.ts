import { Component , EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User} from './user.model' ;
import { Card } from "../shared/card/card";


@Component({  
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input({ required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;
   @Output() select = new EventEmitter();


get imagepath(){
  return ' assets/users/'+this.user.avatar;
}
 
Onselectuser(){
 this.select.emit(this.user.id);
}

}

