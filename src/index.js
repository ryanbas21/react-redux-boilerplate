import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppContainer from './containers/App';
import React from 'react'
render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <IndexRoute path='/' component={AppContainer} />
        <Route path='/subscribe' component={Subscribe} />
        <Route path='/Contact' component={Contact} />
        <Route path='/signup' component={Disclaimer} />
        <Route path='/login' component={Login} />
        <Route path='/blog' component={Blog} />
    </Router>
    </Provider>
),document.getElementById('root'));
