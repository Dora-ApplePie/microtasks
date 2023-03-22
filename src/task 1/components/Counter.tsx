import React, {useState} from 'react';


function Counter() {


    const [a, setA] = useState<number>(13)
    const onClickHandler = (arg: number) => {
        setA(arg + 1)
    }

    const onClickReset = () => {
        setA(0)
    }

    return (
        <div>
            <h4>Counter</h4>
            <h5>Your score is: {a}</h5>
            <button onClick={() => onClickHandler(a)}>Go!</button>
            <button onClick={onClickReset}>0</button>
        </div>
    );
}

export default Counter;
