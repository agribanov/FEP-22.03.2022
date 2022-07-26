import './App.css';

import Buttons from './Buttons';
import counterSelector from './selectors/counterSelector';
import logo from './logo.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// function App() {
//     const counter = useSelector(counterSelector);

//     return (
//         <div className="App">
//             Counter: {counter}
//             <Buttons />
//         </div>
//     );
// }

function App() {
    const [counter, setCounter] = useState(0);

    function inc() {
        setCounter(counter + 1);
    }
    function add(value) {
        setCounter(counter + value);
    }

    return (
        <div className="App">
            Counter: {counter}
            <Buttons onInc={inc} onAdd={add} counter={counter} />
        </div>
    );
}

export default App;
