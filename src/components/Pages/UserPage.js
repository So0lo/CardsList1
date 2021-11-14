import { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import preloader from '../../images/loader.gif';
import { User } from '../User/User';
import { withError } from '../../hoc/withError';

const HandledUser = withError(User);

export const UserPage = (props) => {
    const {userId} = useParams();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error('failed fething data');
            }
            return res.json();
        })
        .then(({data}) => {
            setUserData(data);
        })
        .catch(({message}) => setErrorMessage(message))
        .finally(() => setIsLoading(false));
    }, [])

    return (
        <>
            {!isLoading
            ? <HandledUser {...userData} errorMsg={errorMessage}/>
            : <img src={preloader}/>}
        </>
    );
};
