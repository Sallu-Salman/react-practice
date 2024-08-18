import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function onClickIncrement() {
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // ---> This won't update the count to 3 times, rather the count variable is taken as 0 everytime, because CURRENTSTATE is taken as count value (which is 0) unless this function ends.

        // Rather you need to send a updater function, which takes a PENDING state to calculate.

        // best practice

        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
    }

    function onClickDecrement() {
        setCount(count-1);
    }

    function onClickReset() {
        setCount(0);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={onClickIncrement}>Increase</button>
            <button onClick={onClickReset}>Reset</button>
            <button onClick={onClickDecrement}>Decrease</button>
        </>
    )
}

export default Counter
