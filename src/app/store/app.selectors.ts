import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './app.state';

export const allUserState = createFeatureSelector<State>('userData');

export const getAllUserData = createSelector(allUserState, (state: State) => {
    return state.data;
});