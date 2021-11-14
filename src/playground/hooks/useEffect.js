import { useEffect, useState, useRef} from 'react';
import { useCounter } from './useCounter';

export const Test = () => {
    const {count, inc, dec} = useCounter(0, 1);
    const renderRef = useRef(false);
    
    const handleClick = () => {
        inc();
    };

    // useEffect(() => {
    //     document.title = count;
    //     console.log('rerender');
    // }, [count]);

    useEffect(() => {
        if (!renderRef.current) {
            renderRef.current = true;
        } else {
            document.title = count;
            console.log('rerender');
        }
    });

    // useEffect(() => {
    //     document.title = count;
    //     console.log('rerender');
    //     return () => {
    //         console.log('unmount');
    //     }
    // }, []);

    console.log(`render`);
    return (
    <>
        <div>{count}</div>
        <button onClick={handleClick}>+</button>
    </>
    )

};

export const TextToggler = () => {
    const [shouldShow, setShouldShow] = useState(true);

    return (
        <>
            <button onClick={()=>setShouldShow((prev) => !prev)}>Toggle</button>
            {
                shouldShow && <Test/>
            }
        </>
    );
}