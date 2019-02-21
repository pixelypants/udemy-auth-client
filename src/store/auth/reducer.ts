import { ActionType, getType, StateType } from 'typesafe-actions';
import AuthState from "./initialState";
import { AUTH_USER, AUTH_ERROR } from './actions';

export const initState: AuthState = {
    authenticated: '',
    errorMessage: ''
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return Object.assign({}, state, {
                authenticated: action.payload
            });
        case AUTH_ERROR:
            return Object.assign({}, state, {
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
export type AuthState = StateType<typeof authReducer>;