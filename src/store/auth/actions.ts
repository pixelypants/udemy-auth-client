import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { SignupFormProps } from "../../models/SignupFormProps";

export const SIGNUP_USER = 'auth/SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'auth/SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'auth/SIGNUP_USER_FAILURE';

// export const authUserAction = createAction(SIGNUP_USER, resolve => {
//     return (props: SignupFormProps) => resolve(props);
// });

export const signupAction = createAsyncAction(
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
)<SignupFormProps, string, Error>();