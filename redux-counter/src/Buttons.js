import { add, inc } from './store/actions/counterActions';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import counterSelector from './selectors/counterSelector';

// function Buttons() {
//     const counter = useSelector(counterSelector);

//     const dispatch = useDispatch();

//     function onIncBtnClick() {
//         dispatch(inc());
//     }

//     function onAddBtnClick() {
//         dispatch(add(10));
//     }

//     return (
//         <div>
//             <button onClick={onIncBtnClick}>Increment</button>
//             <button onClick={onAddBtnClick}>{counter} + 10</button>
//         </div>
//     );
// }

function Buttons({ counter, onAdd, onInc }) {
    function onIncBtnClick() {
        onInc();
    }

    function onAddBtnClick() {
        onAdd(10);
    }

    return (
        <div>
            <button onClick={onIncBtnClick}>Increment</button>
            <button onClick={onAddBtnClick}>{counter} + 10</button>
        </div>
    );
}

export default Buttons;
