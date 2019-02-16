import React, { Component } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { ActionType } from 'typesafe-actions';

import { signupAction } from '../../store/auth/actions';

const dispatchProps = {
    signup: signupAction.request
}

// https://codesandbox.io/s/github/piotrwitek/typesafe-actions/tree/master/codesandbox

class Signup extends Component<InjectedFormProps & typeof dispatchProps> {

    onSubmit = (formProps: any) => {
        this.props.signup(formProps);
        debugger;
        console.log('');
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        )
    }
}

export default compose(
    connect(null, dispatchProps),
    reduxForm({ form: 'signup' })
)(Signup);
