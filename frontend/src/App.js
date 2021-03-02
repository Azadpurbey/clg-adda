import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Material from './Pages/material/Material'
import ProfilePage from './components/ProfilePage'
import Signin from './components/SigninPage'
import Home from './components/Home'
import Alumini from './components/AluminiPage'
import Signup from './components/SignupPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Upload from './Pages/material/Upload'
import ProfDetail from './Pages/prof/ProfDetail'

const App = () => {
  return (
    <Router>
      <Header />
      <div className='app__container'>
        <Route path='/profDetail/:department' component={ProfDetail} />
        <Route exact path='/material' component={Material} />
        <Route path='/material/:id/edit' component={Upload} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/signin' component={Signin} />
        <Route path='/signUp' component={Signup} />
        <Route path='/alumini' component={Alumini} />
        <Route exact path='/' component={Home}></Route>
      </div>
      <Footer />
    </Router>
  )
}

export default App
