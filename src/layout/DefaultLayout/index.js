import React from 'react'
import Header from './Header/screens'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {

    return (
        <>
            <div className=" mx-0">
                <div className="card ">
                    <Header />
                </div>
                <div className="grid pt-3">
                    <div className=" col-12 lg:col-2">
                        <Sidebar />
                    </div>
                    <div className=" col-12 lg:col-10">

                    </div>

                </div>

            </div>
        </>
    )
}

export default DefaultLayout