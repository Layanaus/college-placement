import React from 'react'

const PublicUserNav = () => {
  return (
    <div className="container-fluid p-0">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
      <a href="home" className="navbar-brand ml-lg-3">
        <h1 className="m-0 text-uppercase text-primary">
          <img src="img\lg - Copy.jpg" width="50px" />
          &nbsp;Placement cell
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
          <a href="home" className="nav-item nav-link active">
            Home
          </a>
          {/* <a href="course.html" class="nav-item nav-link">Courses</a> */}
          <a href="PublicUserAbout" className="nav-item nav-link">
            About
          </a>
          <a href="PublicUserContact" className="nav-item nav-link">
            Contact
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              Register
            </a>
            <div className="dropdown-menu m-0">
              <a href="UserReg" className="dropdown-item">
                Student
              </a>
              <a href="CompanyReg" className="dropdown-item">
                Company
              </a>
              <a href="placementReg" className="dropdown-item">
                Placement Officer
              </a>
            </div>
          </div>
        </div>
        <div
          className="nav-item dropdown"
          style={{ backgroundColor: "#1aa7ec", color: "white", borderRadius: 5 }}
        >
          <a href="#" className="nav-link " style={{ color: "white" }}>
            Login
          </a>
      
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default PublicUserNav