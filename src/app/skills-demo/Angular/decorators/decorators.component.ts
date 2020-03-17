import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
  }
  onSelect(user : User) {
    this.user = user;
  }
}
