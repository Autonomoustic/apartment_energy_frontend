import React from 'react'

import MyAccount from '../Components.js/MyAccount'
import MyBills from '../Components.js/MyBills'
import OtherUsers from '../Components.js/OtherUsers'
import MeterReading from '../Components.js/MeterReading'
import Settings from '../Components.js/Settings'
import LogOut from '../Components.js/LogOut'

class MyBuildingContainer extends React.Component {

  render () {
    const { building } = this.props
    return (
      <div className='myBuildingContainer'>
        <h1 className='mybuiliding'>{this.props.building.name}</h1>
        <div className='myBuildingRow'>
          <MyAccount building={building} />
          <MyBills building={building} />
          <OtherUsers building={building} />
        </div>
        <div className='myBuildingRow'>
          <MeterReading building={building} />
          <LogOut logOutUser={this.props.logOutUser} building={building} />
        </div>
      </div>
    )
  }
}

export default MyBuildingContainer
