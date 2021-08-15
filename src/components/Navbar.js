import React,  {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Navbar = () => {    
    
    const {loginState, handleCheckLog} = useContext(GlobalContext)
    const [isOpen, setisOpen] = useState(false)
    const handleToggle = () =>{
        setisOpen(!isOpen)
    }

    useEffect(() => {
        handleCheckLog()
        // return () => {
        //     cleanup
        // }
    }, [])
    
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

