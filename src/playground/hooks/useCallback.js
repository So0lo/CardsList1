import { useState, useCallback, memo, useMemo} from "react";

const Item = memo(({itemData: {id, name}, clickHandler}) => {
    console.log(`${id} item rend`);
    return <div onClick={() => clickHandler(id)}>{name}</div> 
});

export const Example = () => {

    const [message, setMessage] = useState('');

    const items = useMemo(() => [
        {id:1, name: 'od'},
        {id:2, name: 'dv'},
        {id:3, name: 'tr'}
    ], []);
    

    const handleClick = useCallback((id) => {
        console.log(`${id} item was clicked`);
    }, []);

    // const handleClick = useCallback(() => {
    //     console.log(`new mes income ${message}`);
    // }, [message]);
    const handleMessage = () => {
        setMessage(Math.random());
    }

    console.log(`render`);
    return <> 
        <h1>use callback</h1>
        {/* <button onClick={handleClick}>click</button> */}
        <div>{message}</div>
        <button onClick={handleMessage}>new message</button>
        {items.map((item) => <Item 
         itemData={item}
         clickHandler={handleClick}
         key={item.id}/>)}
    </>
};
