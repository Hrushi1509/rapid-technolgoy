import React from 'react'
import './navigations.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';

const Navigations = () => {
  return (
    <div className='navigations'>
        <div className='navigation'>
            <span><DashboardIcon/></span>
            <span>Dashboard</span>
        </div>
        <div className='navigation'>
            <span><PersonAddAlt1Icon/></span>
            <span>Add Candidate</span>
        </div>
        <div className='navigation'>
            <span><DashboardCustomizeIcon/></span>
            <span>Assignment Dashboard</span>
        </div>
        <div className='navigation'>
            <span><NoteAddIcon/></span>
            <span>My Timesheet</span>
        </div>
        <div className='navigation'>
            <span><CreditScoreIcon/></span>
            <span>Approve Timesheet</span>
        </div>
        <div className='navigation'>
            <span><LoginSharpIcon/></span>
            <span>Login to HRMS</span>
        </div>
    </div>
  )
}

export default Navigations