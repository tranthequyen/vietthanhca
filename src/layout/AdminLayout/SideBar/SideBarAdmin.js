import React from 'react'

import { Link } from "react-router-dom";
import '../../style/index.css'
import logo from '@/layout/img/logo.png'

const SideBarAdmin = props => {
      const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

      const detailSideBarAdmin = [
            { name: 'Trang chủ', route: '/', icon: 'pi pi-home' },
            { name: 'Người dùng', route: '/list_user', icon: 'pi pi-user' },
            { name: 'Bài Hát', route: '/list_song', icon: 'pi pi-folder' },
            { name: 'Ca sỹ', route: '/play_list', icon: 'pi pi-list' },
            { name: 'Bài đọc', route: '/favourite', icon: 'pi pi-heart-fill' },
            { name: 'Banner', route: '/favourite', icon: 'pi pi-history' },
      ]
      return (
            <div className={`${sidebarClass} `}>
                  <div className=''>
                        <div className='flex align-items-center justify-content-center'>
                              <img src={logo} />
                              <h2 className='m-0 text-center '> VIETTHANHCA</h2>
                        </div>
                        {/* <Divider className='mt-0' /> */}
                        <ul className='m-0 p-3 pt-3'>
                              {detailSideBarAdmin.map(d =>
                                    <li className='p-3 flex gap-3 text-xl text-white text_hover '>
                                          <i className={`${d.icon} text-xl`} ></i>
                                          <Link className='no-underline text-white'>{d.name}</Link>
                                    </li>
                              )}
                        </ul>
                  </div>
            </div>
      )


}
export default SideBarAdmin
