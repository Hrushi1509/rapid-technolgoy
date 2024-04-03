import React from 'react'
import './SideNavigation.css'
import './navigations.css'
import Navigations from './Navigations'
import LogoutIcon from '@mui/icons-material/Logout';

const SideNavigation = () => {
    return (
        <div className='sideNavigation'>
            <div className='imageDiv'>
                <h4>RapidTech</h4>
            </div>
            <Navigations />

            <div style={{position:'sticky'}} className='navigation sign-out'>
                <span><LogoutIcon /></span>
                <span>Sign Out</span>
            </div>
            
        </div>
    )
}

export default SideNavigation