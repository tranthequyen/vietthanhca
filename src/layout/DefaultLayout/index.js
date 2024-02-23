import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header/screens';
import Partner from '@/modules/Home/screens/Partner';
import Footer from './footer/screens/Footer';
import AudioPlay from './AudioPlay/screens/AudioPlay';
import { useLocation } from 'react-router-dom';

function DefaultLayout({ children }) {
    const [sidebarOpen, setSideBarOpen] = useState(true);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };
    const location = useLocation()

    const contentClass = sidebarOpen ? "content open" : "content";
    const headerClass = sidebarOpen ? "header open" : "header";

    return (
        <div className='flex flex-column'>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            <div className={headerClass}>
                <Header onClick={handleViewSidebar} />
            </div>
            <div className={contentClass}>
                {children}
            </div>
            {location.pathname === '/' && <div>
                <Partner />
            </div>}

            <div>
                <Footer />
            </div>
            <AudioPlay />
        </div>
    );
}

export default DefaultLayout;
