import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../store/auth/actions';

const dispatchProps = {
    signout: actions.signout
}

class Signout extends Component<typeof dispatchProps> {
    componentDidMount() {
        this.props.signout();
    }
    render() {
        return <div>Sorry to see you go!</div>
    }
}
export default connect(null, dispatchProps)(Signout);