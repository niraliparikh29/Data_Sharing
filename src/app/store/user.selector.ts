import { createFeatureSelector,createSelector } from '@ngrx/store';
import { State  } from './user.model';

export const allUserState = createFeatureSelector<State>('reducer');

export const getAllUserData = createSelector(allUserState,(state:State) => {
    console.log("In Selector",state)
    return state.posts
})