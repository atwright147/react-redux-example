import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';
import CoursesPage from './app/components/Course/CoursesPage';

// const store = createStore(
//     rootReducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore();

render (
    <Provider store={store}>
        <CoursesPage />
    </Provider>
    ,document.getElementById('app')
);
