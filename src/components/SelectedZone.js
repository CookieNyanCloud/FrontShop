import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import Loading from './Loading'
import TableZone from './TableZone'

export const SelectedZone = () => {
    console.log("SZ");
    const {
        loading, 
        loginState, 
        zones, 
        IDclick, 
        zoneKol
    } = useContext(GlobalContext);
    
    // handleLogCheck()
    if(IDclick >0 && IDclick <= zoneKol){
        return (
            <section> 
                {loading?
                <Loading/>:
                <TableZone 
                    zone={zones[IDclick-1]}
                    login={loginState}
                />}
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

export default SelectedZone







// export default class SelectedZone extends Component {
//     static contextType = DataContext
//     render() {
//         let {loading, LoginState, zones, IDclick, zoneKol,handleLogCheck} = this.context
//         handleLogCheck()
//         console.log("SZ", LoginState);
//         if(IDclick >0 && IDclick <= zoneKol){
//             return (
//             <section> 
//                 {loading?
//                 <Loading/>:
//                 <TableZone 
//                 zone={zones[IDclick-1]}
//                 login={LoginState}
//                 />}
//             </section>
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