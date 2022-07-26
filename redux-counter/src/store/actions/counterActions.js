export const INCREMENT_ACTION_TYPE = 'INCREMENT_ACTION_TYPE';
export function inc() {
    return { type: INCREMENT_ACTION_TYPE };
}

export const DECREMENT_ACTION_TYPE = 'DECREMENT_ACTION_TYPE';
export function dec() {
    return { type: DECREMENT_ACTION_TYPE };
}

export const ADD_ACTION_TYPE = 'ADD_ACTION_TYPE';
export function add(payload) {
    return { type: ADD_ACTION_TYPE, payload };
}

export const SUB_ACTION_TYPE = 'SUB_ACTION_TYPE';
export function sub(payload) {
    return { type: SUB_ACTION_TYPE, payload };
}
