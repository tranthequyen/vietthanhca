import React from 'react'
import { Link } from "react-router-dom";
import '../styles/style.css'
function Sidebar() {
    return (
        <div className='card sidebar_admin'>
            <ul className='m-0 p-3 pt-3'>
                <li className='p-3 flex gap-3 text-xl text-white '>
                    <i className="pi pi-home text-xl" ></i>
                    <Link className='no-underline text-white'>Trang chủ</Link>
                </li>
                <li className='p-3 flex gap-3 text-xl text-white '>
                    <i className="pi pi-heart-fill text-xl" ></i>
                    <Link className='no-underline text-white '>Yêu thích</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar