const redux = require('redux');

const INCREMENT_ACTION_TYPE = 'INCREMENT_ACTION_TYPE';
function inc() {
    return { type: INCREMENT_ACTION_TYPE };
}

const DECREMENT_ACTION_TYPE = 'DECREMENT_ACTION_TYPE';
function dec() {
    return { type: DECREMENT_ACTION_TYPE };
}

const ADD_ACTION_TYPE = 'ADD_ACTION_TYPE';
function add(payload) {
    return { type: ADD_ACTION_TYPE, payload };
}

const SUB_ACTION_TYPE = 'SUB_ACTION_TYPE';
function sub(payload) {
    return { type: SUB_ACTION_TYPE, payload };
}

const store = redux.createStore(rootReducer, {
    counter: 0,
});

function rootReducer(state, { type, payload }) {
    switch (type) {
        case INCREMENT_ACTION_TYPE:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT_ACTION_TYPE:
            return { ...state, counter: state.counter - 1 };
        case ADD_ACTION_TYPE:
            return { ...state, counter: state.counter + payload };
        case SUB_ACTION_TYPE:
            return { ...state, counter: state.counter - payload };
        default:
            return state;
    }
}

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(sub(100));
store.dispatch(add(150));

// store.dispatch({ type: DECREMENT_ACTION_TYPE });
// console.log(store.getState());
