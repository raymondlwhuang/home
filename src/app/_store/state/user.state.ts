import { User } from 'src/app/_models/user';


export interface UserState {
    Users : Array<User>;
    UserError : Error;
}

export const initialUserState = (): UserState =>{
    //this.userService.getUsers().subscribe(data => this.users = data);
    //return {Users: Array<User>(),UserError: null};
    let users : Array<User> = [{firstName : 'Carly',lastName : 'Huang'}];
    return {Users:users,UserError:null};
} 