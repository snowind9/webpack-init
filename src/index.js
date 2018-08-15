import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getInitialNotes} from './store/actions';
import configureStore from './store/store';

import App from './App';

import PureCssApp from './genericUI/PureCssApp';
import {Display, WhenTruthy, WhenFalsy} from './study/DisplayChildren';

const store = configureStore();
store.dispatch(getInitialNotes);

const age = 19;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    // <Display ifTruthy={age >= 21} >
    //     <WhenTruthy>
    //        <h1>You can Enter</h1>
    //     </WhenTruthy>
    //     <WhenFalsy>
    //        <h1>Beat it Kid</h1>
    //     </WhenFalsy>
    // </Display>
    , document.getElementById('app'));
