// based on: http://blog.revathskumar.com/2016/02/redux.html

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// reducer 
function reducer(state = 0, action) {
    console.log('reducer', action)
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

//create store
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// React Component

class Counter extends Component {
    increment() {
        this.props.dispatch({
            type: 'INCREMENT'
        });
    }
    decrement() {
        this.props.dispatch({
            type: 'DECREMENT'
        });
    }
    render() {
        return (
            <div>
                {this.props.state}
                <div>
                    <button onClick={this.increment.bind(this)}>+</button>
                    <button onClick={this.decrement.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return { state };
}

const CounterApp = connect(mapStateToProps)(Counter);

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        )
    }
}

export default Main;
