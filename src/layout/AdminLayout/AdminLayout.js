
import SideBarAdmin from './SideBar/SideBarAdmin'
import '../style/index.css'
import HeaderAdmin from './Header/HeaderAdmin';
import React, { useEffect, useRef, useState } from 'react';

function AdminLayout({ children }) {
      const [sidebarOpen, setSideBarOpen] = useState(true);
      const handleViewSidebar = () => {
            setSideBarOpen(!sidebarOpen);
      };

      const contentClass = sidebarOpen ? "content open" : "content";
      const headerClass = sidebarOpen ? "header open" : "header";
      return (
            <div className='flex flex-column'>

                  <SideBarAdmin isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
                  <div className={headerClass}>
                        <HeaderAdmin onClick={handleViewSidebar} />
                  </div>
                  <div className={contentClass}>
                        {children}
                  </div>

            </div >
      )
}

export default AdminLayout
