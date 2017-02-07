import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store, { history } from './store/store'

render((
    <Provider store={store}>
        <div>
            This should print out
        </div>
    </Provider>
),document.getElementById('root'));
