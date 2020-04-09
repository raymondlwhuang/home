import { User } from 'src/app/_models/user';


export interface UserState {
    Users : Array<User>;
    UserError : Error;
}

export const iniUserState = (): UserState =>{
    return {Users: Array<User>(),UserError: null};
} 