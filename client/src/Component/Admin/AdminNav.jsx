import React from 'react'

const AdminNav = () => {
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
    
    <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
      <a href="home" className="navbar-brand ml-lg-3">
        <h1 className="m-0 text-uppercase text-primary">
          {/* <img src="img\lg - Copy.jpg" width="50px" /> */}
          {/* Placement portal */}
        </h1>
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
        <a href="Admin" className="nav-item nav-link active">
            Home
          </a>
          <a href="managecompany" className="nav-item nav-link active">
            Manage company
          </a>
          {/* <a href="course.html" class="nav-item nav-link">Courses</a> */}
          <a href="manageuser" className="nav-item nav-link active">
            Manage user
          </a>
          <a href="managecollege" className="nav-item nav-link active">
            Manage Placement details
          </a>

          <a href="category" className="nav-item nav-link active">
            Job Category
          </a>
        <a href="contactus" className="nav-item nav-link active">
            Manage Public Contactus
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
              <a href="adminviewjobs" className="dropdown-item">
                Job opening
              </a>
              <a href="adviewjobportal" className="dropdown-item">
                Job portal
              </a>
              {/* <a href="company.html" className="dropdown-item">
                Company
              </a>
              <a href="placement offcr.html" className="dropdown-item">
                Placement Officer
              </a> */}
            </div>
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
              <a href="changepassword" className="dropdown-item">
                Change Password
              </a>
              <a href="/" className="dropdown-item">
                log out
              </a>
              
            </div>
          </div>
    
      </div>
    </nav>
  </div>
  </>
  )
}

export default AdminNav