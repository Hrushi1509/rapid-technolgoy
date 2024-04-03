import React from 'react'
import './Timesheet.css'
import Header from './header/Header.js'
import Calculation from './calculation/Calculation.js'
import DetailedTimesheet from './detailedTimesheet/DetailedTimesheet.js'

const Timesheet = () => {
  return (
    <div className='timesheet'>
        <Header/>
        <Calculation/>
        <DetailedTimesheet/>
    </div>
  )
}

export default Timesheet