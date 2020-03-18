import { Component, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  @Input()  user: User;
}