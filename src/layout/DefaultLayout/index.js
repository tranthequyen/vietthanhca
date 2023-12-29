import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <div className='m-2'>
            <Header />
            <div className="container grid ">
                <div className='col-2 card'> <Sidebar /></div>
                <div className="content col-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout