import React from 'react'

const MyBills = props => {
  return (
    <div className='buildingComponent'>
      <h3>December Bill Estimate</h3>
      <p>£
    {
      (props.building.users.user_bills.map(bill => parseFloat(bill.bill_amount.slice(1))).reduce((a, b) => a + b) / 3).toFixed(2)

    }
      </p>
      <h3>My Bills</h3>
      {
        props.building.users.user_bills.map(bill => <p>{bill.month}, {bill.bill_amount}</p>)
      }

    </div>
  )
}

export default MyBills
