import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
// import Main from './app/components/Main';
import Input from './app/components/Input';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
})

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render (
    <Provider store={store}>
        <Input />
    </Provider>,
    document.getElementById('app')
);
