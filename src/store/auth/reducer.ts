import { ActionType, getType, StateType } from 'typesafe-actions';
import { AuthState } from "./initialState";

import * as auth from './actions';
export type AuthActions = ActionType<typeof auth>;

export const initState: AuthState = {
    authenticated: '',
    errorMessage: ''
}

export const authReducer = (state = initState, action: AuthActions) => {
    switch (action.type) {
        case getType(auth.authUser.request):
            return state;
        // return Object.assign({}, state, {
        //     authenticated: action.payload.email
        // })
        default:
            return state;
    }
}
export type AuthState = StateType<typeof authReducer>;