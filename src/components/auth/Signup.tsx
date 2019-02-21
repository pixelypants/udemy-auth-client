import React, { Component } from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import * as actions from '../../store/auth/actions';

const dispatchProps = {
    signup: actions.signup
}
export interface SignupProps {
    errorMessage: string;
}

class Signup extends Component<InjectedFormProps & typeof dispatchProps & SignupProps & RouteComponentProps> {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });
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
                <div>
                    {this.props.errorMessage}
                </div>
                <button>Sign Up!</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage }
}

export default compose(
    connect(mapStateToProps, dispatchProps),
    reduxForm({ form: 'signup' })
)(Signup);
