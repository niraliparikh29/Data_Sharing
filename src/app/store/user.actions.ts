import { Action } from '@ngrx/store';
import * as dataFormat from './user.model';

import { LoadChildren } from '@angular/router';

export const LOAD = "LOAD";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL"

export class load implements Action {
    readonly type = LOAD;
}

export class loadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    
    constructor(public payload:dataFormat.IUser[]) {
        console.log("In action",payload)
     };
    
}

export class loadFail implements Action {
    readonly type = LOAD_FAIL
}

export type allType = load | loadFail | loadSuccess