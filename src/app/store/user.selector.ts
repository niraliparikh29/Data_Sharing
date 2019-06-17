import { createFeatureSelector,createSelector } from '@ngrx/store';
import { State , ContactState} from './user.model';

//User ngrx
export const allUserState = createFeatureSelector<State>('reducer');

export const getAllUserData = createSelector(allUserState,(state:State) => {
    console.log("In Selector",state)
    return state.posts
});

//contact ngrx

export const contact = createFeatureSelector<ContactState>('reducer');

export const contactData = createSelector(contact,(state:ContactState) => {
    return state.data
});