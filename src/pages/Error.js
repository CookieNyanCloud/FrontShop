import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { useContext} from "react";
import { GlobalContext } from '../context/GlobalState'



export const Error = () =>  {
    
    const {
        handleLogOut
    } =  useContext(GlobalContext);
        
    let LogOut = () => {
        handleLogOut()
    }

    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link 
                    to="/" 
                    className="btn-primary"
                    onClick={LogOut}
                    >
                        return home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}




















// export default function Error() {
    
// const context = useContext(DataContext)
//     const {
//         handleLogOut
//     } = context
        
//     let LogOut = () => {
//         handleLogOut()
//         // document.location.href = "/";

//     }

//     return (
//         <div>
//             <Hero>
//                 <Banner title="404" subtitle="page not found">
//                     <Link 
//                     to="/" 
//                     className="btn-primary"
//                     onClick={LogOut}
//                     >
//                         return home
//                     </Link>
//                 </Banner>
//             </Hero>
//         </div>
//     )
// }
