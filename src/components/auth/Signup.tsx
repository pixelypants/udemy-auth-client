import React, { Component } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";

class SignupBase extends Component<InjectedFormProps> {
    render() {
        return (
            <form>
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
            </form>
        )
    }
}

export const Signup = reduxForm({ form: 'signup' })(SignupBase);