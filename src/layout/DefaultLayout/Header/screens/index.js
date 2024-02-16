// Header.js
import React, { useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../../../style/index.css'

import Login from './Login';
import SignUp from './SignUp';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from 'primereact/menu';
const Header = props => {
    const [visibleSignUp, setVisibleSignUp] = useState(false);
    const [visibleLogin, setVisibleLogin] = useState(false);
    const navigate = useNavigate();
    const menuRight = useRef(null);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userInfo = useSelector((state) => state.user.userInfo);
    const items = [
        {
            label: 'Cá nhân',
            items: [
                {
                    label: 'Chủ đề',
                    icon: 'pi pi-palette'
                },
                {
                    label: 'Tài khoản',
                    icon: 'pi pi-user-edit'
                },
                {
                    label: 'Tải về',
                    icon: 'pi pi-download'
                },
                {
                    label: 'Hỗ trợ',
                    icon: 'pi pi-info-circle'
                },
                {
                    label: 'Cài đặt',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Đăng xuất',
                    icon: 'pi pi-sign-out'

                }
            ]
        }
    ];
    return (
        <div className={`header`}>
            <SignUp visibleSignUp={visibleSignUp} setVisibleSignUp={setVisibleSignUp} />
            <Login visibleLogin={visibleLogin} setVisibleLogin={setVisibleLogin} />
            <div className="card h-5rem header_bar ">
                <div className=" flex justify-content-between p-3">
                    <Button onClick={props.onClick} icon="pi pi-align-justify" />
                    <div className="w-6 flex gap-2 ">
                        <InputText type="text" placeholder="Bạn muốn nghe gì ?" className='w-full' />
                        <Button icon="pi pi-search" label='Tìm kiếm' className='text-black-alpha-80 bg-white w-3 border-none' />
                    </div>
                    {isLoggedIn ?
                        <>
                            {
                                userInfo?.admin === true ?
                                    <Button label='Đi đến trang quản trị' onClick={() => navigate('/admin')} /> : null
                            }
                            <div className="flex gap-3">
                                <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                                <Button icon="pi pi-user" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />

                            </div>
                        </>
                        :
                        <div className="flex gap-3">
                            <Button icon="pi pi-user-plus" label='Đăng ký' className='text-black-alpha-80 bg-white border-none' rounded onClick={() => setVisibleSignUp(true)} />
                            <Button icon="pi pi-sign-in" label='Đăng nhập' className='text-black-alpha-80 bg-white border-none' rounded onClick={() => setVisibleLogin(true)} />
                        </div>
                    }
                </div>
            </div>
        </div>)
}


export default Header;
