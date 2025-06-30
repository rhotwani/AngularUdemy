import { Component , Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input () avatar!:string ;
  @Input() name!:string ;



get imagepath(){
  return ' assets/users/'+this.avatar ;
}

}

