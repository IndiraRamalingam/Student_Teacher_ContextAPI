import React from 'react'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
  <>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavBar />
              <Outlet />            
            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout