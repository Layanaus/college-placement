import React from 'react'

const Placementofficernav = () => {
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
        <a href="home" className="navbar-brand ml-lg-3">
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
          <a href="Placementofficer" className="nav-item nav-link active">
             Home
            </a>
            {/* <a href="Pjobportal" className="nav-item nav-link active">
               job portal
            </a> */}
            <div className="nav-item dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              Job portal
            </a>
            <div className="dropdown-menu m-0">
            <a href="Pjobportal" className="dropdown-item">
              Create portal
            </a>
            <a href="manageportal" className="dropdown-item">
              View portal
            </a>
            </div>
            </div>
            
            {/* <a href="course.html" class="nav-item nav-link">Courses</a> */}
            <a href="studentmanage" className="nav-item nav-link active">
              Manage user
            </a>
            
          
            <div className="nav-item dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              Placement cell
            </a>
            <div className="dropdown-menu m-0">
            <a href="sendrequest" className="dropdown-item">
              Make requests
            </a>
            <a href="companyresponse" className="dropdown-item">
              View response
            </a>
            <a href="viewrequests" className="dropdown-item">
              View Requests
            </a>
              {/* <a href="company.html" className="dropdown-item">
                Company
              </a>
              <a href="placement offcr.html" className="dropdown-item">
                Placement Officer
              </a> */}
            </div>
          </div>
           
            <a href="POviewjobs" className="nav-item nav-link active">
              View Jobs
            </a>
            <a href="placedstudent" className="nav-item nav-link active">
              Placed Students
            </a>
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle active"
                data-toggle="dropdown"
              >
                View jobs
              </a>
              <div className="dropdown-menu m-0">
                <a href="register.html" className="dropdown-item">
                  Admin
                </a>
                <a href="vm.html" className="dropdown-item">
                  User
                </a>
                <a href="company.html" className="dropdown-item">
                  Company
                </a>
                <a href="placement offcr.html" className="dropdown-item">
                  Placement Officer
                </a>
              </div> */}
            {/* </div> */}
          </div>
          {/* <a
            href="signin.html"
            className="btn btn-primary py-2 px-4 d-none d-lg-block"
          >
            Sign In
          </a> */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              My Profile
            </a>
            <div className="dropdown-menu m-0">
              <a href="Placementchange" className="dropdown-item">
                Change Password
              </a>
              <a href="vm.html" className="dropdown-item">
                log out
              </a>
              
            </div>
          </div>

        </div>
      </nav>
    </div>
    {/* Navbar End */}
   
  </>
  
  )
}

export default Placementofficernav