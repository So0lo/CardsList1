import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const UserPage = (props) => {
    const {userId} = useParams();

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => res.json())
        .then((res) => {console.log(res);})
        .catch(() => {});
    }, [])

    return (<h1>UserPage {userId}</h1>);
};
