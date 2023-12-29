import { publicRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout';
import { Fragment } from 'react';


function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout ? DefaultLayout : Fragment
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
