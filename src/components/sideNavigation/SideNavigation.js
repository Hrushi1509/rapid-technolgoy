import React from 'react'
import './SideNavigation.css'
import './navigations.css'
import Navigations from './Navigations'
import LogoutIcon from '@mui/icons-material/Logout';

const SideNavigation = () => {
    return (
        <div className='sideNavigation'>
            <div className='imageDiv'>
                <img style={{}} src='https://www.logomaker.com/wpstatic/uploads/2015/06/Logo-Samples2-56-min.jpg' alt='imagesss' />
            </div>
            <Navigations />

            <div className='navigation sign-out'>
                <span><LogoutIcon /></span>
                <span>Sign Out</span>
            </div>
            
        </div>
    )
}

export default SideNavigation