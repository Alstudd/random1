import React from 'react'
import ReactDOM from "react-dom/client"
import {
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import './index.css'

import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<MainLayout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} /> 
    <Route path="login" element={<Login />} /> 
    <Route path="register" element={<Register />} /> 
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div className='bg-[#EEF4FF]'><App /></div>)
