import { Action } from '@ngrx/store';
import { Contact, IUser } from './app.state';

//To save data
export const SAVE = "SAVE"

export class save implements Action {
    readonly type = SAVE;
    constructor(public payload: Contact[]) { }
}

// User NGRX
export const USERDATA = "USERDATA"
export class user implements Action {
    readonly type = USERDATA;
    constructor(public userPayLoad: IUser[]) {
    }
}

//load userNGRX 
export const LOAD = "LOAD"
export class load implements Action {
    readonly type = LOAD
}
export type Actions = save | user | load
