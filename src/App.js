import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { building } from './Data'

import MissionStatement from './Components.js/MissionStatement'
import Login from './Containers.js/LoginContainer'
import MyBuildingContainer from './Containers.js/MyBuildingContainer'



class App extends Component {
  state = {
    building: null,
    username: null,
    password: null
  }


  componentDidMount () {
    if (localStorage.getItem('username')){
      this.setState({ building })
    }
  }

  logOutUser = () => {
    localStorage.clear('username')
    this.setState({
      building: null,
      username: null,
      password: null
    })
  }

  loginExisitingUser = (event) => {
    event.preventDefault()

    if (event.target.uname.value) {
      this.setState({
        building: building,
        username: event.target.uname.value,
        password: event.target.psw.value

      })
    }

    localStorage.setItem('username', event.target.uname.value)
  }

  renderHomePage = () => {
    if (this.state.building){
        return <MyBuildingContainer logOutUser={this.logOutUser} building={this.state.building}/>
    } else {
      return (
        <>
          <MissionStatement />
          <Login loginExisitingUser={this.loginExisitingUser}/>
        </>
      )
    }

  }


  render () {
    return (
      <Router>
        <div>
          <h1 className='logo'>Apartment Energy</h1>
          <div className='flex'>
            <Route exact path='/home' render={() => this.renderHomePage()} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
