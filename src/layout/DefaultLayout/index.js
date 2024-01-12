import React from 'react'
import Header from './Header/screens'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {

    return (
        <div className="flex justify-content-between">
            <div className='fixed' style={{ minWidth: '280px' }}>
                <Sidebar />
            </div>
            <div className='w-full' style={{ marginLeft: '290px', }}>
                <div className='fixed ' style={{ width: 'calc(100% - 300px)', }} >
                    <Header />
                </div>
                <div className='pt-8'>{children}</div>
            </div>
        </div>


    )
}

export default DefaultLayout