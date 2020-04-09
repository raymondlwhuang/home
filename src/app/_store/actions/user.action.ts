import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/_models/user';


export const getUserAction =  createAction('[USER] - Get User');

export const createUserAction = createAction(
    '[USER] - Create User',
    props<User>()
);

export const beginGetUserAction = createAction('[USER] - Begin Get User');

export const successGetUserAction = createAction(
    '[USER] - Success Get User',
    props<{payload:Array<User>}>()
);

export const beginCreateUserAction = createAction(
    '[USER] - Begin Create User',
    props<{payload:User}>()
);
export const successCreateUserAction = createAction(
    '[USER] - Success Create User',
    props<{payload:User}>()
);
export const errorUserAction = createAction(
    '[USER] - Error',
    props<Error>()
);