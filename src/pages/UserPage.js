import React, {useContext, useEffect}  from 'react'
import UserInfo from '../components/UserInfo'
import { GlobalContext } from '../context/GlobalState'


export const UserPage = () => {

    const { handleUserInfo } = useContext(GlobalContext);

    useEffect(() => {
        handleUserInfo()
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <UserInfo/>
        </div>
    )
}

export default UserPage;