import { useState } from 'react';
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className="counter-container">
                <button onClick={decrement}>Decrement</button>
                <p>{count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
