import React from 'react'
import './detailedTimesheet.css'
import Searchbar from '../searchbar/Searchbar'
import AllTimesheets from '../allTimesheets/AllTimesheets'

const DetailedTimesheet = () => {
  return (
    <div className='detailedTimesheet'>
        <div className='searchandtimesheet'>
            <div className='searchBar'>
                <Searchbar/>
            </div>
            <div className='timesheet'>
                <AllTimesheets/>
            </div>
        </div>
    </div>
  )
}

export default DetailedTimesheet