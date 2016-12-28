import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppContainer from './containers/App';
import React from 'react'
render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={AppContainer} />
    </Router>
    </Provider>
),document.getElementById('root'));
