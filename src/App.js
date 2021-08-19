import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {UserPage} from './pages/UserPage'
import {Error} from './pages/Error'
import {Contacts} from './pages/Contacts'
import {SignUp} from './pages/SignUp'
import {SignIn} from './pages/SignIn';
import {SignInAdmin} from './pages/SignInAdmin';
import {Admin} from './pages/Admin';
import {Navbar} from './components/Navbar'
import {Copyright} from './components/Copyright';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/userpage" component={UserPage} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-in-admin" component={SignInAdmin} />
          <Route path="/admin" component={Admin} />
          <Route component={Error}/>
        </Switch>
        <Copyright/>
      </>
    </GlobalProvider>
    
  );
}
export default App;