import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppContainer from './containers/App';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import LoginContainer from './containers/Login-Container';
import SignUpContainer from './containers/SignupContainer';
import BlogContainer from './containers/BlogContainer';
import SubscribeContainer from './containers/SubscribeContainer';
import DisclaimerContainer from './containers/Disclaimer-Container';

render((
    <Provider store={store}>
    <Router history={browserHistory}>
    <Route path='/' component={AppContainer} />
        <IndexRoute component={HomeContainer} />
        <Route path='subscribe' component={SubscribeContainer} />
        <Route path='contact' component={ContactContainer} />
        <Route path='disclaimer' component={DisclaimerContainer} />
        <Route path='signup' component={SignUpContainer} />
        <Route path='login' component={LoginContainer} />
        <Route path='blog' component={BlogContainer} />
    </Router>
    </Provider>
),document.getElementById('root'));
