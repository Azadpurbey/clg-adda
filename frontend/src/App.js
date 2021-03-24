import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import Material from './Pages/material/Material'
import ProfilePage from './Pages/userProfile/Profile'
import Signin from './Pages/signinSignup/Signin'
import Home from './Pages/home/Home'
import AluminiList from './Pages/alumini/AluminiList'
import AluminiProfile from './Pages/alumini/AluminiProfile'
import Signup from './Pages/signinSignup/Signup'
import Header from './components/Header'
import EditProfile from './components/EditProfile'
import ProfList from './Pages/prof/ProfList'
import AddProf from './Pages/prof/AddProf'
import AddAlumini from './Pages/prof/AddAlumini'
import AddMaterial from './Pages/material/AddMaterial'
import EditProfDetail from './Pages/prof/EditProfDetail'
import EditAluminiDetail from './Pages/alumini/EditAluminiDetail'
import UserList from './components/UserList'
import SingleUserProfile from './components/SingleUserProfile'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/profDetail/edit/:id' component={EditProfDetail} />
      <Route path='/alumini/edit/:id' component={EditAluminiDetail} />
      <Route exact path='/profDetail/:department' component={ProfList} />
      <Route path='/admin/addProf' component={AddProf} />
      <Route path='/admin/addAlumini' component={AddAlumini} />
      <Route path='/material/upload' component={AddMaterial} />
      <Route exact path='/material' component={Material} />
      <Route exact path='/profile' component={ProfilePage} />
      <Route path='/signin' component={Signin} />
      <Route path='/signUp' component={Signup} />
      <Route exact path='/alumini/:department' component={AluminiList} />
      <Route exact path='/alumini/profile/:id' component={AluminiProfile} />

      <Route exact path='/profie/edit' component={EditProfile} />

      <Route exact path='/' component={Home}></Route>
      <Route exact path='/users' component={UserList} />
      <Route exact path='/user/:id' component={SingleUserProfile} />
    </Router>
  )
}

export default App
