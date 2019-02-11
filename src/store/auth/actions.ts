import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { SignupFormProps } from "../../models/SignupFormProps";

export const AUTH_USER = 'auth/AUTH_USER';
export const AUTH_USER_SUCCESS = 'auth/AUTH_USER_SUCCESS';
export const AUTH_USER_FAILURE = 'auth/AUTH_USER_FAILURE';

// export const authUserAction = createAction(AUTH_USER, resolve => {
//     return (props: SignupFormProps) => resolve(props);
// });

export const authUser = createAsyncAction(
    AUTH_USER,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE
)<SignupFormProps, string, Error>();