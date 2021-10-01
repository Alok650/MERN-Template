import React, { Component, useState} from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Home from './components/home'
import Navigationbar from './components/Navbar'
import Dashboard from './components/Dashboard'

//Tools/Pages
import Tool1 from './pages/too1'
import Tool2 from './pages/tool2'
import Tool3 from './pages/tool3'

import About from './pages/about'

class App extends Component {
  //user
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  //alertBox

  render() {
    let today = new Date().toLocaleDateString()
    return (
      <div className="App">
   
        <Navigationbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
            <div className="m-2 bg-gray-50 h-6 w-full text-teal-500 font-mono text-sm">
              <strong>{this.state.username}:{today}</strong>
            </div>
        }

        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/dashboard"
          render={() =>
            <Dashboard/>}
        />

        {/* //Tools */}
        <Route
          path="/tool1"
          render={() =>
            <Tool1/>}
        />
        <Route
          path="/tool2"
          render={() =>
            <Tool2/>}
        />
        <Route
          path="/tool3"
          render={() =>
            <Tool3/>}
        />
        <Route
          path="/about"
          render={() =>
            <About/>}
        />
      </div>
    );
  }
}

export default App;
