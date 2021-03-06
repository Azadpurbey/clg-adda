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
import Footer from './components/Footer'
import EditProfile from './components/EditProfile'
import ProfDetail from './Pages/prof/ProfDetail'
import AddProf from './Pages/prof/AddProf'
import AddAlumini from './Pages/prof/AddAlumini'
import './index.css'
import AddMaterial from './Pages/material/AddMaterial'
import EditProfDetail from './components/EditProfDetail'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/profDetail/edit/:id' component={EditProfDetail} />
      <Route exact path='/profDetail/:department' component={ProfDetail} />
      <Route path='/admin/addProf' component={AddProf} />
      <Route path='/admin/addAlumini' component={AddAlumini} />
      <Route path='/material/upload' component={AddMaterial} />
      <Route exact path='/material' component={Material} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/signin' component={Signin} />
      <Route path='/signUp' component={Signup} />
      <Route exact path='/alumini/:department' component={Alumini} />
      <Route exact path='/alumini/profile/:id' component={AluminiProfile} />

      <Route exact path='/profie/edit' component={EditProfile} />
      <Route exact path='/' component={Home}></Route>
      <Footer />
    </Router>
  )
}

export default App
