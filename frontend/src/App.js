import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Material from './components/Material'
import ProfilePage from './components/ProfilePage'
import Signin from './components/SigninPage'
import Home from './components/Home'
import Alumini from './components/AluminiPage'
import Signup from './components/SignupPage'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/Material'>
            <Material />
          </Route>

          <Route path='/profile'>
            <ProfilePage />
          </Route>

          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/signUp'>
            <Signup />
          </Route>
          <Route path='/alumini'>
            <Alumini />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
