import React from 'react'
import './calculation.css'
import { data } from '../../../data'

const Calculation = () => {
    return (
        <div className='calculation'>
            <div className='calculationBody'>
                {
                    data?.map((data) => (
                        <div className='calculationDetails'>
                            <div className='calculationLeft'>
                                <div className='calculationDetail'>{data.name}</div>
                                <div className='calculationValue'>{data.value}</div>
                            </div>
                            <div className='calculationRight'>{data.image}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Calculation