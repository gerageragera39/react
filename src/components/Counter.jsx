import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Start');

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>++++</button>
            <button onClick={minus}>- - - -</button>

            <h1>{value}</h1>
            <input
                type="text"
                onChange={event => {setValue(event.target.value)}}
                value={value}/>
        </div>
    );
};

export default Counter;