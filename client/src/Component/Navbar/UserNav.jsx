import React from 'react'

const UserNav = () => {
  return (
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
        <a href="index.html" className="nav-item nav-link active">
          placements
        </a>
        {/* <a href="course.html" class="nav-item nav-link">Courses</a> */}
        <a href="jobportal.html" className="nav-item nav-link active">
          Job portal
        </a>
        <a href="user_notifications.html" className="nav-item nav-link active">
          Notifications
        </a>
        <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              My Profile
            </a>
            <div className="dropdown-menu m-0">
              <a href="register.html" className="dropdown-item">
                Change Password
              </a>
              <a href="vm.html" className="dropdown-item">
                log out
              </a>
              
            </div>
          </div>
        {/* <a href="about.html" className="nav-item nav-link" />
        <a href="contact.html" class="nav-item nav-link">Applying job portal</a> */} 
        {/* <div class="nav-item dropdown"> */}
        {/* <a href="index.html" class="nav-item nav-link active">View interview status</a> */}
        {/* /* <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">View interview status</a>
        /* <div class="dropdown-menu m-0">
                      <a href="index.html" class="nav-item nav-link active">Manage resume</a>
                      <a href="register.html" class="dropdown-item">Admin</a>                            
                      <a href="vm.html" class="dropdown-item">User</a>
                      <a href="company.html" class="dropdown-item">Company</a>
                      <a href="placement offcr.html" class="dropdown-item">Placement Officer</a>
                  </div> */}

        </div>          
      </div>
      </nav>
      </div>


  )
}

export default UserNav