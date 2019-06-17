import * as userModel from './user.model';
import * as action$ from './user.actions';
//Declaration of user ngrx
const initialState:userModel.State = {
    loading:false,
    failed:false,
    success:false,
    posts:[],
    errMsg:""
}

//declaration of contact ngrx
const firstState: userModel.ContactState = {
    loading: false,
    failed:false,
    data:[],
    errMsg : ""
}

export function Reducer (state = initialState, action:action$.allType,contactState = firstState) {
    console.log("In reducer => ",state)

    switch (action.type) {
        case action$.LOAD : {
            return {
                ... state ,
                loading:true,
                failed:false,
                errMsg:''
            }
        }

        case action$.LOAD_SUCCESS: {
            return {
                ...state ,
                loading:false,
                failed:false,
                posts:action.payload,
                errMsg:''
            }
        }

        case action$.LOAD_FAIL : {
            return {
                ...state,
                loading:false,
                failed:true,
                errMsg:'not found'
            }
        }

        case action$.SAVE : {
            return {
                ...contactState,
                loading:false,
                failed:false,
                data:action.payloadContact
            }
        }
    }
}
