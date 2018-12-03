import React from 'react'

import MyAccount from '../Components.js/MyAccount'
import MyBills from '../Components.js/MyBills'

class MyBuildingContainer extends React.Component {

  render () {
    return (
      <div className='myBuildingContainer'>
        <h1 className='mybuiliding'>My Building: {this.props.building.name}</h1>

        <MyAccount building={this.props.building} />
        <MyBills building={this.props.building} />
      </div>
    )
  }
}

export default MyBuildingContainer
