import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Loading from './Loading'
// import TableZone from './TableZone'



export const UserInfo = () => {    
        
        const {
            loading,
            loginState, 
            user
        } = useContext(GlobalContext);

        let {username, email } = user
        let zones = user.zone
        if(!loading&&loginState){
            return (
                <section> 
                    {loading?
                        <Loading/>:
                        <div>
                            <table id="zone-table">
                                <tr>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>zones</th>
                                </tr>
                                <tr>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{zones}</td>
                                </tr>
                            </table>
                        </div>
                    }
            </section>
            )
        }else{
            return(
                <section> 
                    <Loading/>
                </section>
            )
        }
        
}

export default UserInfo













// export default class UserInfo extends Component {
//     static contextType = DataContext
    
//     render() {
        
//         let {loading, LoginState, handleUserInfo, user,handleLogCheck} = this.context
//         handleLogCheck()
//         handleUserInfo()
        
//         let {name, email } = user
//         let zones = user.taken
//         console.log("asasas",user);
//         if(!loading&&LoginState){
//             return (
//                 <section> 
//                     {loading?
//                         <Loading/>:
//                         <div>
//                             <table id="zone-table">
//                                 <tr>
//                                     <th>name</th>
//                                     <th>email</th>
//                                     <th>zones</th>
//                                 </tr>
//                                 <tr>
//                                     <td>{name}</td>
//                                     <td>{email}</td>
//                                     <td>{zones}</td>
//                                 </tr>
//                             </table>
//                         </div>
//                     }
//              </section>
//             )
//         }else{
//             return(
//                 <section> 
//                     <Loading/>
//                 </section>
//             )
//         }
        
//     }
// }


