import { ActionType, getType, StateType } from 'typesafe-actions';
import { AuthState } from "./initialState";

import * as auth from './actions';
import { AnonymousSubject } from 'rxjs/internal/Subject';
export type AuthActions = ActionType<typeof auth>;

export const initState: AuthState = {
    authenticated: '',
    errorMessage: ''
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case auth.AUTH_USER:
            return state;
        // return Object.assign({}, state, {
        //     authenticated: action.payload.email
        // })
        default:
            return state;
    }
}
export type AuthState = StateType<typeof authReducer>;