import * as userModel from './user.model';
import * as action$ from './user.actions';

const initialState:userModel.State = {
    loading:false,
    failed:false,
    success:false,
    posts:[],
    errMsg:""
}

export function Reducer (state = initialState, action:action$.allType) {
    console.log("In reducer => ",state)

    switch (action.type) {
        case action$.LOAD : {
            return {
                ... state 
            }
        }
    }

}
