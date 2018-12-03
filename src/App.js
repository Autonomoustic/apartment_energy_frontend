import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { building } from './Data'

import MissionStatement from './Components.js/MissionStatement'
import Login from './Containers.js/LoginContainer'
import MyBuildingContainer from './Containers.js/MyBuildingContainer'



class App extends Component {
  state = {
    building: building,
    username: null,
    password: null
  }


  componentDidMount () {
    if (localStorage.getItem('username') === building.users.name){
      this.state.building = building
    }
  }

  loginExisitingUser = (event) => {
    event.preventDefault()

    if (event.target.username === building.users.name) {
      this.setState({
        username: event.target.uname.value,
        password: event.target.password.value
      })
    }

    localStorage.setItem('username', event.target.uname.value)
  }

  renderHomePage = () => {
    if (this.state.building){
        return <MyBuildingContainer building={this.state.building}/>
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

            <Route path='/home' render={() => this.renderHomePage()} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
