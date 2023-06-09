import React from 'react'

const UserSlider = () => {
  return (
    <div
  className="jumbotron jumbotron-fluid position-relative overlay-bottom"
  style={{ marginBottom: 90 }}
>
  <div className="container text-center my-5 py-5">
    <h1 className="text-white mt-4 mb-4">Welcome To Your</h1>
    <h1 className="text-white display-1 mb-5">Career Stepping stone</h1>
    <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: 600 }}>
      <div className="input-group">
        <div className="input-group-prepend">
          {/* <button class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Courses</button> */}
          <div className="dropdown-menu">
            {/* <a class="dropdown-item" href="#">Courses 1</a>
                      <a class="dropdown-item" href="#">Courses 2</a>
                      <a class="dropdown-item" href="#">Courses 3</a> */}
          </div>
        </div>
        {/* <input type="text" class="form-control border-light" style="padding: 30px 25px;" placeholder="Keyword"> */}
        <div className="input-group-append">
          {/* <button class="btn btn-secondary px-4 px-lg-5">Search</button> */}
        </div>
      </div>
    </div>
  </div>
</div>

  
  )
}

export default UserSlider