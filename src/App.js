import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout, AdminLayout } from './layout';
import { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './redux/userSlice';
import { clientApi } from './axios';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            clientApi.get('/user/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                if (response.data?.status) dispatch(loginSuccess({ token, userInfo: response.data?.data }));
            }).catch(error => {
                console.error('Không thể lấy thông tin người dùng', error);
                localStorage.removeItem('token');
            });
        }
    }, []);

    return (
        <>
            <audio />
            <Router>
                <Routes>
                    {[...publicRoutes, ...privateRoutes].map((route, index) => {
                        const Layout = route.layout === 'admin' ? AdminLayout : route.layout ? DefaultLayout : Fragment
                        const Page = route.component
                        return <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
