import './css/SideDrawer.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalState'

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer']

  if (show) {
    sideDrawerClass.push('show')
  }

  const { loginState, handleCheckLog } = useContext(GlobalContext)

  useEffect(() => {
    handleCheckLog()
  }, [loginState])

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer__links' onClick={click}>
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
    </div>
  )
}

export default SideDrawer
