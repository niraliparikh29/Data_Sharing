import { Effect, ofType, Actions } from '@ngrx/effects';
import { ApisService } from './../apis.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs'
import * as userAction from './app.actions';
import { mergeMap, map } from 'rxjs/operators';
import * as model from './app.state';

@Injectable()
export class AppEffect {
    constructor(private service: ApisService, private action$: Actions) {
    }
    @Effect()
    loadData$: Observable<Action> = this.action$.pipe(
        ofType<userAction.load>(userAction.LOAD),
        mergeMap((action: userAction.load) =>
            this.service.listUsers().pipe(
                map(
                    (data: model.IUser[]) => {
                        return new userAction.user(data)
                    }
                ),
            ))
    )
}