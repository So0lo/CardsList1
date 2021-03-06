import {useState} from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const dec = () => {
        setCount(count - 1);
    }

    const inc = () => {
        setTimeout(() => setCount((prevCount) => prevCount + 1),1000);
    }

    const inputChange = ({target: {value}}) => {
        setText(value);
    };

    const countChange = () => {
        setCount(+text);
    } 

    return(
        <>
            <h1>Counter</h1>
            <input 
                type="text" 
                onChange={inputChange} 
                value={text}/>
            <button onClick={countChange}>set counter</button>
            <br/>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>
        </>
    );
}
