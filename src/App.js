import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'
import EventsScreen from './screens/EventsScreen'
import EventScreen from './screens/EventScreen'
import AboutScreen from './screens/AboutScreen'
import ErrorScreen from './screens/ErrorScreen'
import SignUpScreen from './screens/SignUpScreen'
import SignInScreen from './screens/SignInScreen'

import GlobalProvider from './context/GlobalState'

const App = () => {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <GlobalProvider>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

        <main className='app'>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/events' component={EventsScreen} />
            <Route exact path='/event/:id' component={EventsScreen} />
            <Route exact path='/user' component={UserScreen} />
            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/sign-up' component={SignUpScreen} />
            <Route exact path='/sign-in' component={SignInScreen} />
            <Route component={ErrorScreen} />
          </Switch>
        </main>
      </Router>
    </GlobalProvider>
  )
}

export default App
