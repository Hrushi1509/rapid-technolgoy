import React from 'react'
import './searchbar.css'
import { SearchData } from '../../../data'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Searchbar = () => {

    const letterToColor = {
        A: 'orange',
        B: 'blue',
        C: 'green',
        F: 'orange',
        E: 'blue',
    };

    const getBackgroundColor = (name) => {
        const firstLetter = name.charAt(0).toUpperCase();
        return letterToColor[firstLetter] || 'gray';
    };

    return (
        <div className='searchAndData'>
            <div className='search-container'>
                <span className='search-icon'><SearchSharpIcon /></span>
                <input
                    type="text"
                    placeholder="Search candidate"
                    className="search "
                />
            </div>
            <div className='searchData'>
                {
                    SearchData?.map((data, index) => (
                        <div className='searchDataDetails' key={index}>
                            <div className='profilePic' style={{ backgroundColor: getBackgroundColor(data.name) }}>
                                <p style={{ fontSize: '30px', fontWeight: '500' }}>{data.name.charAt(0)}</p>
                            </div>
                            < div className='details'>
                                <div>{data.name}</div>
                                <div>{data.position}</div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div>
    )
}


export default Searchbar