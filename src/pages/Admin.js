import { useEffect,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export  const Admin = () => {
    const {handleCheckLog} = useContext(GlobalContext)
    useEffect(() => {
        handleCheckLog()
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default Admin;