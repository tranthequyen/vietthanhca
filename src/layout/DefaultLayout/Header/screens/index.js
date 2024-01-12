// Header.js
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../../styles/style.css'

import Login from './Login';
import SignUp from './SignUp';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
function Header() {
    const [visibleSignUp, setVisibleSignUp] = useState(false);
    const [visibleLogin, setVisibleLogin] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userInfo = useSelector((state) => state.user.userInfo);


    return (
        <div className='w-full'>
            <SignUp visibleSignUp={visibleSignUp} setVisibleSignUp={setVisibleSignUp} />
            <Login visibleLogin={visibleLogin} setVisibleLogin={setVisibleLogin} />
            <div className="card h-5rem flex justify-content-between align-items-center px-3">
                <div className="w-6 flex gap-2 px-3">
                    <InputText type="text" placeholder="Bạn muốn nghe gì ?" className='w-full ' />
                    <Button icon="pi pi-search" label='Tìm kiếm' className='text-black-alpha-80 bg-white w-3 border-none' />
                </div>
                {isLoggedIn ?
                    <div className='px-3'>
                        {
                            userInfo?.admin === true ?
                                <Button label='Đi đến trang quản trị' onClick={() => navigate('/admin')} /> : null
                        }
                        <div className="flex justify-content-center align-items-center gap-5">
                            <h3 className='text-white m-0'>Xin chào, {userInfo?.username}</h3>
                            <Button onClick={() => setVisibleLogin(true)} icon='pi pi-sign-out' />
                        </div>
                    </div>
                    :
                    <div className="flex gap-3">
                        <Button icon="pi pi-user-plus" label='Đăng ký' className='text-black-alpha-80 bg-white border-none' rounded onClick={() => setVisibleSignUp(true)} />
                        <Button icon="pi pi-sign-in" label='Đăng nhập' className='text-black-alpha-80 bg-white border-none' rounded onClick={() => setVisibleLogin(true)} />
                    </div>

                }
            </div>
        </div>)
}


export default Header;
