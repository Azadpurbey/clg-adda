import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Material from './components/Material';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import Home from './components/Home';
import Alumini from './components/Alumini';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
<Router>
      <div className="App">
        <Switch>
          <Route path='/Material'>
            <Material/>
          </Route>

          <Route path='/profile'>
            <ProfilePage/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signUp'>
            <RegistrationForm/>
          </Route>
          <Route path='/alumini'>
            <Alumini/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App
