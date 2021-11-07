import { useCounter } from "./useCounter";

export const Eggs = () => {

    const {count, dec, inc} = useCounter(0, 10);

    return(
        <>
            <h1>Eggs count</h1>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>
        </>
    );
}
