import {Effect, ofType,Actions } from '@ngrx/effects';
import { ApisService} from './../apis.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable ,of } from 'rxjs'
import * as userAction from './user.actions';
import { mergeMap,map,catchError} from 'rxjs/operators';
import * as dataFormat from './../store/user.model';

@Injectable() 
export class AppEffect {
    constructor (private service: ApisService,private action$:Actions) {

    }
    @Effect()
    loadData$:Observable<Action> = this.action$.pipe(
        ofType<userAction.load>(userAction.LOAD),
        mergeMap((action:userAction.load) => 
        this.service.listUsers().pipe(
            map(
                (post:dataFormat.IUser[]) => {
                    console.log("In effect",post)
                    return new userAction.loadSuccess(post)
                }
            ),
            catchError(err => of(new userAction.loadFail()))
        ))
    )
}