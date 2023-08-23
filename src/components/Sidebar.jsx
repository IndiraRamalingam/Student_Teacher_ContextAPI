import React, { useState } from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  const [compoIsDrop, setCompoIsDrop] = useState(false);
  const [utiliIsDrop, setUtiliIsDrop] = useState(false);


  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/">
          <div className="sidebar-brand-icon ">
          <i className="fa-sharp fa-solid fa-school"></i>           
          </div>
          <div className="sidebar-brand-text mx-3">
             Admin Dashboard 
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span> Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            href="#"
            onClick={() => setCompoIsDrop(!compoIsDrop)}
            className={compoIsDrop ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={compoIsDrop}
            aria-controls="collapseTwo"
          >
            <i className="fa-solid fa-chalkboard-user"></i>
            <span> Student</span>
          </a>
          <div
            id="collapseTwo"
            className={compoIsDrop ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Components:</h6> */}
              <Link className="collapse-item" to="/Student/AddStudent">
                Add Student
              </Link>

              <Link className="collapse-item" to="/Student/ViewStudents">
                View Students
              </Link>

            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            onClick={() => setUtiliIsDrop(!utiliIsDrop)}
            className={utiliIsDrop ? "nav-link" : "nav-link collapsed"}
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded={utiliIsDrop}
            aria-controls="collapseUtilities"
          >
            <i className="fa-solid fa-person-chalkboard"></i>
            <span>Teacher</span>
          </a>
          <div
            id="collapseUtilities"
            className={utiliIsDrop ? "collapse show" : "collapse"}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
              <Link className="collapse-item" to="/Teacher/AddTeacher">
                Add Teacher
              </Link>
    
              <Link className="collapse-item" to="/Teacher/ViewTeachers">
                View Teacher
              </Link>
  
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

       

      </ul>
    </>
  );
}

export default Sidebar;