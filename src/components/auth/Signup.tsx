import React, { Component } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";

class SignupBase extends Component<InjectedFormProps> {

    onSubmit = (formProps: any) => {
        console.log(formProps)
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

export const Signup = reduxForm({ form: 'signup' })(SignupBase);