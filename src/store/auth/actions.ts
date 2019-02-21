import SignupFormProps from "../../models/SignupFormProps";
import axios from "axios";

export const AUTH_USER = '@auth/AUTH_USER';

export const signup = (props: SignupFormProps) => async dispatch => {
    axios.post('http:localhost:3090/signup', props);
    dispatch({
        type: 'BIND_COMMENTS',
        payload: ''
    })
}


