import {
    ADD_ACTION_TYPE,
    INCREMENT_ACTION_TYPE,
} from '../actions/counterActions';

const INITIAL_VALUE = { counter: 10 };

export default function counterReducer(
    state = INITIAL_VALUE,
    { type, payload },
) {
    switch (type) {
        case INCREMENT_ACTION_TYPE:
            return { ...state, counter: state.counter + 1 };
        case ADD_ACTION_TYPE:
            return { ...state, counter: state.counter + payload };
        default:
            return state;
    }
}
