import { Component , Input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input ({required:true}) avatar!:string ;
  @Input({required:true}) name!:string ;



get imagepath(){
  return ' assets/users/'+this.avatar ;
}

}

