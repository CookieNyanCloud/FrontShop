import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../context/GlobalState'

import './css/Navbar.css'

const Navbar = ({ click }) => {
  const { loginState, handleCheckLog } = useContext(GlobalContext)

  useEffect(() => {
    handleCheckLog()
  }, [loginState])

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>
          <h2>Some Name</h2>
        </Link>
      </div>

      <ul className='navbar__links'>
        <li>
          <Link to='/events'>events</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link
            to={loginState ? '/userpage' : '/sign-in'}
            className='state__link'
          >
            {loginState ? (
              <i class='fas fa-sign-in-alt'>user</i>
            ) : (
              <i class='fas fa-user-circle'>log-in</i>
            )}
          </Link>
        </li>
      </ul>

      <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
