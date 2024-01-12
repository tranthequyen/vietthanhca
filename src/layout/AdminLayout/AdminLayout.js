import React from 'react'
import SideBarAdmin from './SideBar/SideBarAdmin'
import './styles/style.css'
import HeaderAdmin from './Header/HeaderAdmin';

function AdminLayout({ children }) {
      console.log(children);
      return (
            <div className="">
                  <HeaderAdmin />
                  <div className="grid p-2">
                        <div className="col-2 pl-0 ">
                              <SideBarAdmin />
                        </div>
                        <div className="col-10">
                              {children}
                        </div>
                  </div>

            </div >
      )
}

export default AdminLayout
