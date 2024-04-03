import React from 'react'
import './allTimesheets.css'
import TimesheetTable from '../timesheetTable/TimesheetTable'

const AllTimesheets = () => {
  return (
    <div className='timesheetSection'>
        <h1 style={{fontSize:'20px', fontWeight:'500'}}>All TimeSheet</h1>
        <TimesheetTable/>
    </div>
  )
}

export default AllTimesheets