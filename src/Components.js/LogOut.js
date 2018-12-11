import React from 'react'

const LogOut = props => {
  return (
    <div className='buildingComponent'>
      <button onClick={() => props.logOutUser()} style={{marginTop: '50%'}}>Log Out</button>
    </div>
  )
}

export default LogOut
