import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserState } from 'src/app/_store/state/user.state';
import { User } from 'src/app/_models/user';
import { State, Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as UserActions from '../../../_store/actions/user.action'
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})
export class StateManagementComponent implements OnInit {
  user$ : Observable<UserState>;
  userSubscription : Subscription;
  userList : Array<User>;
  userError : Error;
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  yearsActive?: number=0;
  token?: string;
  constructor(private store : Store <{users : UserState}>) {
    this.user$ = this.store.pipe(select('users'));
   }

  ngOnInit() {
    this.userSubscription = this.user$.pipe(
      map(data=>{
        this.userList = data.Users;
        this.userError = data.UserError;
      })
    ).subscribe();
    this.store.dispatch(UserActions.beginGetUserAction());
  }
  ngOnDestroy(): void {
  }
  createUser() {
    const user: User = { 
      id : uuid(),
      email:this.email,
      username: this.firstName + ' ' + this.lastName,
      firstName:this.firstName,
      lastName:this.lastName,
      yearsActive:this.yearsActive,
     };
   
    this.store.dispatch(UserActions.createUserAction(user));
    this.store.dispatch(UserActions.beginCreateUserAction({ payload: user }));
    this.id = 0;
    this.email='';
    this.firstName='';
    this.lastName='';
    this.yearsActive=0;
  }

}
