import { useState } from 'react';
import {Row} from './Row';
import { myContext } from '../hooks/UseContext';

export const Table = () => {
    const [theme, setTheme] = useState(`dark`);

    const themeHandler = () => {
        setTheme((prevTheme) => prevTheme === `dark` ? 'light' : 'dark');
    }

    return (
    <myContext.Provider value={{
        info: 2,
        theme
    }}>
        <table style={{border: `1px solid gray`}}>
            <Row/>
        </table>
        <button onClick={themeHandler}>toggle theme</button>
    </myContext.Provider>
)
};