import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './page/Home'
import Contact from './page/Contact'
import About from './page/About'
import SignUp from './page/SignUp'
import NotFound from './page/NotFound'
import Login from './page/Login'
import Byid from './page/Byid'
import Cart from './page/Cart'
import Account from './page/Account'
import Wishlist from './page/Wishlist'
import OurProducts from './page/OurProducts'
import ScrollToTop from './page/ScrollToTop'
import CheckOut from './page/CheckOut'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
       {
        index: true,
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
       {
        path: "aboutUs",
        element: <About/>
      },
       {
        path: "signUp",
        element: <SignUp/>
       },
        {
        path: "*",
        element: <NotFound/>
       },
       {
        path: "login",
        element: <Login/>
       },
         {
        path: "ById/:id",
        element: <Byid/>
       },
         {
        path: "cart",
        element: <Cart/>
       },
         {
        path: "account",
        element: <Account/>
       },
          {
        path: "wislist",
        element: <Wishlist/>
       },
          {
        path: "ourProducts",
        element: <OurProducts/>
       },
         {
        path: "ScrollToTop",
        element: <ScrollToTop/>
       },
          {
        path: "CheckOut",
        element: <CheckOut/>
       },

    ]
  }
])



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App