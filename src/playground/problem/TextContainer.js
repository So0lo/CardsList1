import { useContext } from "react";
import { myContext } from "../hooks/UseContext";

export const TextContainer = () => {
    const ctx = useContext(myContext);
    return <span style={{background: ctx.theme === `dark` ? 'black' : 'pink'}}>
     {ctx.info + ' Text'}
    </span>
}
