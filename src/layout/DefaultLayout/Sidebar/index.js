import React from 'react';

import { Link } from "react-router-dom";
import '../../style/index.css'
import { Divider } from 'primereact/divider';
import logo from '@/layout/img/logo.png'
const Sidebar = props => {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    const detailSideBar = [
        { name: 'Trang chủ', route: '/', icon: 'pi pi-home' },
        { name: 'Xếp hạng', route: '/rank', icon: 'pi pi-chart-bar' },
        { name: 'Thư viện', route: '/libaray', icon: 'pi pi-folder' },
        { name: 'PlayList', route: '/play_list', icon: 'pi pi-list' },
        { name: 'Yêu thích', route: '/favourite', icon: 'pi pi-heart-fill' },
    ]
    return (
        <div className={`${sidebarClass} `}>
            <div className='flex align-items-center justify-content-center'>
                <img src={logo} />
                <h2 className='m-0 text-center '> VIETTHANHCA</h2>
            </div>
            <Divider className='mt-0' />
            <ul className='m-0 p-3 pt-3'>
                {detailSideBar.map(d =>
                    <li className='p-3 flex gap-3 text-xl text-white text_hover '>
                        <i className={`${d.icon} text-xl`} ></i>
                        <Link className='no-underline text-white'>{d.name}</Link>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Sidebar