import React,  {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Navbar = () => {    
    
    const {loginState} = useContext(GlobalContext)
    const [isOpen, setisOpen] = useState(false)
    const handleToggle = () =>{
        setisOpen(!isOpen)
    }
    
    return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="home"/>
                        </Link>
                        <button 
                            type="button" 
                            className="nav-btn" 
                            onClick={handleToggle}>
                            <FaAlignRight                className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={
                        isOpen?
                        "nav-links show-nav":
                        "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                        <li>
                            <Link to=
                            {loginState?
                            "/userpage":
                            "/sign-in"}
                            >{loginState?
                            "личный кабинет":
                            "войти"}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}


















// export default class Navbar extends Component {
//     static contextType = DataContext
    
//     state={
//         isOpen:false
//     }
//     handleToggle = () =>{
//         this.setState({isOpen:!this.state.isOpen})
//     }

//     render() {
//         let {LoginState, handleLogCheck} = this.context
//         handleLogCheck()
//         // handleZones()
//         return (
//             <nav className="navbar">
//                 <div className="nav-center">
//                     <div className="nav-header">
//                         <Link to="/">
//                             <img src={logo} alt="home"/>
//                         </Link>
//                         <button type="button" className="nav-btn" onClick={this.handleToggle}>
//                             <FaAlignRight className="nav-icon"/>
//                         </button>
//                     </div>
//                     <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/contacts">Contacts</Link>
//                         </li>
//                         <li>
//                             <Link to=
//                             {LoginState?
//                             "/userpage":
//                             "/sign-in"}
//                             >{LoginState?
//                             "личный кабинет":
//                             "войти"}</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }
