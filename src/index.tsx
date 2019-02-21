import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./store/index";
import thunk from "redux-thunk";
import AuthState from "./store/auth/initialState";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const auth: AuthState = {
    authenticated: localStorage.getItem('token'),
    errorMessage: ''
}

const store = createStore(
    reducers,
    { auth: auth as any },
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup as any} />
                <Route path="/feature" exact component={Feature} />
                <Route path="/signout" exact component={Signout} />
                <Route path="/signin" exact component={Signin as any} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);