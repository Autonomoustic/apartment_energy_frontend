import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import MissionStatement from './Components.js/MissionStatement'
import Login from './Containers.js/LoginContainer'

class App extends Component {
  state = {
    username: null
  }


  render () {
    return (
      <div>
        <h1 className='logo'>Apartment Energy</h1>
        <div className='flex'>
          <MissionStatement />
          <Login />
        </div>
      </div>
    )
  }
}

export default App
