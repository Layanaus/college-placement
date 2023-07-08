import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Usernav = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('login_id')
    localStorage.removeItem('role')
    navigate('/')
  }
  useEffect(() => {
    const student_id = localStorage.getItem('user_id')
    if (!student_id) {
      navigate('/')
    }
  }, [])
  return (
    <>
  <div className="container-fluid bg-dark">
    <div className="row py-2 px-lg-5">
      <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center text-white">
          <small>
            <i className="fa fa-phone-alt mr-2" />
            +012 345 6789
          </small>
          <small className="px-3">|</small>
          <small>
            <i className="fa fa-envelope mr-2" />
            info@web.com
          </small>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-white px-2" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-white px-2" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-white px-2" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-white px-2" href="">
            <i className="fab fa-instagram" />
          </a>
          <a className="text-white pl-2" href="">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        {/* <h1 class="m-0 text-uppercase text-primary"><img src="img\lg - Copy.jpg" width="50px">&nbsp;Placement cell</h1> */}
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between px-lg-3"
        id="navbarCollapse"
      >
        <div className="navbar-nav mx-auto py-0"> 
        <a href="userbody" className="nav-item nav-link active">
            Home
          </a>
          <div className="nav-item dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              View jobs
            </a>
            <div className="dropdown-menu m-0">
              <a href="user" className="dropdown-item">
                Job Vaccancies
              </a>
              <a href="appliedjobs" className="dropdown-item">
                Applied Jobs
              </a>
              {/* <a href="company.html" className="dropdown-item">
                Company
              </a>
              <a href="placement offcr.html" className="dropdown-item">
                Placement Officer
              </a> */}
            </div>
          </div>
          {/* <a href="course.html" class="nav-item nav-link">Courses</a> */}
          <a href="jobportalhome" className="nav-item nav-link active">
            Job portal
          </a>
         
          <a
            href="Usernotification"
            className="nav-item nav-link active"
          >
            Notifications
          </a>
          <a href="UserProfile" className="nav-item nav-link active">
            Profile
          </a>
          <a href="about.html" className="nav-item nav-link" />
          {/* <a href="contact.html" class="nav-item nav-link">Applying job portal</a> */}
          {/* <div class="nav-item dropdown"> */}
          {/* <a href="index.html" class="nav-item nav-link active">View interview status</a> */}
          {/* <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">View interview status</a> */}
          {/* <div class="dropdown-menu m-0">
                      <a href="index.html" class="nav-item nav-link active">Manage resume</a>
                      <a href="register.html" class="dropdown-item">Admin</a>                            
                      <a href="vm.html" class="dropdown-item">User</a>
                      <a href="company.html" class="dropdown-item">Company</a>
                      <a href="placement offcr.html" class="dropdown-item">Placement Officer</a>
                  </div> */}
        </div>
      </div>
      <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              My Profile
            </a>
            <div className="dropdown-menu m-0">
              <a href="Uchangepassword" className="dropdown-item">
                Change Password
              </a>
              <a onClick={logout} className="dropdown-item">
                log out
              </a>
              
            </div>
          </div>

    </nav>
  </div>
</>

  )
}

export default Usernav