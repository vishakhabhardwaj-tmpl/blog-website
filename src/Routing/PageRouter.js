import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import SingleBlogPage from '../pages/SingleBlogPage';
import About from '../pages/About';
import Layout from '../components/Layout/Layout';

const PageRouter = () => {
    const routes = [
        {
            path: "/",
            component: <Home />,
        },
        {
            path: "/about",
            component: <About/>,
        },
        {
            path: "/contact",
            component: <Contact />,
        },
        {
            path: "/blog/:blogId",
            component: <SingleBlogPage />,
        },
    ]
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        {routes.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />
                    )
                })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
