import SignupFormProps from "../../models/SignupFormProps";
import axios from "axios";

export const AUTH_USER = '@auth/AUTH_USER';
export const AUTH_ERROR = '@auth/AUTH_ERROR';

export const signup = (props: SignupFormProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', props);
        let token = response.data.token;

        dispatch({ type: AUTH_USER, payload: token });
        localStorage.setItem('token', token)
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email is in use' })
    }
}


