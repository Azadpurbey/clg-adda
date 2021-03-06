import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Material from './Pages/material/Material'
import ProfilePage from './Pages/userProfile/Profile'
import Signin from './Pages/signinSignup/Signin'
import Home from './Pages/home/Home'
import Alumini from './Pages/alumini/Alumini'
import AluminiProfile from './Pages/alumini/AluminiProfile'
import Signup from './Pages/signinSignup/Signup'
import Header from './components/Header'
import EditProfile from './components/EditProfile'
import Upload from './Pages/material/Upload'
import ProfDetail from './Pages/prof/ProfDetail'
import AddProf from './Pages/prof/AddProf'
import AddAlumini from './Pages/prof/AddAlumini'
import './index.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/profDetail/:department' component={ProfDetail} />
      <Route path='/admin/addProf' component={AddProf} />
      <Route path='/admin/addAlumini' component={AddAlumini} />
      <Route exact path='/material' component={Material} />
      <Route path='/material/upload' component={Upload} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/signin' component={Signin} />
      <Route path='/signUp' component={Signup} />
      <Route exact path='/alumini/:department' component={Alumini} />
      <Route exact path='/alumini/profile/:id' component={AluminiProfile} />
      <Route exact path='/profie/edit' component={EditProfile} />
      <Route exact path='/' component={Home}></Route>
    </Router>
  )
}

export default App
