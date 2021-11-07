import { useState } from "react";

export const useCounter = (initialCounter, step) => {
    const [counter, setCounter] = useState(initialCounter);

    const dec = () => {
        counter && setCounter((cn) => cn - step);
    }

    const inc = () => {
       setCounter((cn) => cn + step);
    }

    return {count: counter, inc, dec};
};