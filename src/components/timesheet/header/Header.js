import React from 'react'
import './header.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='main-header'>
        <div className='header-box'>
            <h3 style={{fontWeight:'bolder', paddingTop:'5px'}}>Approve Timesheet</h3>
            <div className='profile'>
                <div className='profile-details'>
                    <div className='icon'><PersonOutlineIcon /></div>
                    <div className='profileName'>
                        <span style={{fontSize:'12px'}}>Good Morning</span>
                        <span style={{fontSize:'15px'}}>John Doe</span>
                    </div>
                </div>
                <div className='notification'>
                    <div className='icon notification-icon'><NotificationsIcon/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header