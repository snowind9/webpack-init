import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getInitialNotes} from './store/actions';
import configureStore from './store/store';

import App from './app';

const store = configureStore();
store.dispatch(getInitialNotes);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
