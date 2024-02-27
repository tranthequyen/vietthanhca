import React from 'react';

import { Link } from "react-router-dom";
import '../../style/index.css'
import { Divider } from 'primereact/divider';
import logo from '@/layout/img/logo.png'
import { Button } from 'primereact/button';
import { useState } from 'react';
const Sidebar = props => {
    const [selectedRoute, setSelectedRoute] = useState('/');
    const handleLinkClick = (route) => {
        setSelectedRoute(route);
      };
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    const detailSideBar = [
        { name: 'Trang chủ', route: '/', icon: 'pi pi-home' },
        { name: 'Xếp hạng', route: '/rank', icon: 'pi pi-chart-bar' },
        { name: 'Thư viện', route: '/library', icon: 'pi pi-folder' },
        { name: 'PlayList', route: '/play_list', icon: 'pi pi-list' },
        { name: 'Yêu thích', route: '/favourite', icon: 'pi pi-heart-fill' },
    ]
    return (
        <div className={`${sidebarClass} `}>
            <div className='flex align-items-center justify-content-center'>
                <img src={logo} />
                <h2 className='m-0 text-center webname'> VIETTHANHCA</h2>
                <div className="mobile_button">
                    <span onClick={props.onClick} className="pl-4 pi pi-times" style={{fontSize:'2.4vh'}}></span>
                </div>
            </div>
            <Divider className='mt-0' />
            <ul className='m-0 p-3 pt-3'>
        {detailSideBar.map((d) => (
          <Link to={d.route}>
            {selectedRoute === d.route ?(
                <li
                className='p-3 flex gap-3 text-xl text-white'
                onClick={() => handleLinkClick(d.route)}
                style={{backgroundImage: 'linear-gradient(to right, #029D43 ,#1e1d1d)', borderLeft: '5px  #30F274 solid'}}
              >
                <i className={`${d.icon} text-xl`}></i>
                <div className='no-underline text-white'>{d.name}</div>
              </li>
            ):(            <li
                className='p-3 flex gap-3 text-xl text-white'
                onClick={() => handleLinkClick(d.route)}
              >
                <i className={`${d.icon} text-xl`}></i>
                <div className='no-underline text-white'>{d.name}</div>
              </li>)}
          </Link>
        ))}
      </ul>

        </div>
    )
}

export default Sidebar