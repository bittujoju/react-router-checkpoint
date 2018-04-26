import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import TopNav from './components/TopNav'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <Router>
        <div>
          <TopNav />

          <Route exact path="/" component={() => <Redirect to="/login" />}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={UserProfile}/>
        </div>
      </Router>
    </div>
  )
}

export default App
