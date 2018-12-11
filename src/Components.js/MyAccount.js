import React from 'react'

const MyAccount = props => {
  return (
    <div className='buildingComponent'>
      <h3>My Account</h3>
      <ul>
        <li className='listItem' >{props.building.users.name}</li>
        <li className='listItem' >{props.building.users.email}</li>
        <li className='listItem' >{props.building.users.apartment_no + ' ' + props.building.name + ', ' + props.building.address } </li>
      </ul>
    </div>
  )
}

export default MyAccount
