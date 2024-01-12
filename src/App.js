import React, { useEffect, useRef } from 'react';
import { publicRoutes, privateRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout, AdminLayout } from './layout';
import { Fragment } from 'react';

import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/userSlice';


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {

            dispatch(loginSuccess({ token }));
        } else {

        }
    }, [dispatch]);
    return (
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
    );
}

export default App;
