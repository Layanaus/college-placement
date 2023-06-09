import React from 'react'

const JobPortal = () => {
  return (
    <div className="page-content" style={{ textAlign: "center" }}>
    <div className="form-v10-content">
      <form className="form-detail" action="#" method="post" id="myform">
        <div className="form-left">
          <center>
            <h2>Job portal</h2>
          </center>
          <div className="form-group">
            <div className="form-row form-row-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="input-text"
                placeholder="First Name"
                required=""
              />
            </div>
            <div className="form-row form-row-2">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="input-text"
                placeholder="Last Name"
                required=""
              />
            </div>
          </div>
          <div className="form-row  form-row-3">
            <input
              type="text"
              name="address1"
              id="address1"
              className="input-text"
              placeholder="Address"
              required=""
              style={{ textAlign: "left" }}
            />
          </div>
          <div className="form-row">
            <select name="position">
              <option value="position">Qualitfication</option>
              <option value="director">Post Graduated</option>
              <option value="manager">Graduated</option>
              <option value="employee">Higher Studies</option>
            </select>
            <span className="select-btn">
              <i className="zmdi zmdi-chevron-down" />
            </span>
          </div>
          <div className="form-row">
            <input
              type="date"
              name="dob"
              id="company"
              placeholder="DOB"
              required=""
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="address"
              id="company"
              placeholder="E-mail"
              required=""
            />
          </div>
          <div className="form-row">
            <input
              type="phone"
              name="address"
              className="company"
              id="company"
              placeholder="phone"
              required=""
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="address"
              className="company"
              id="company"
              placeholder="Password"
              required=""
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="address"
              className="company"
              id="company"
              placeholder="Confirm-Passoword"
              required=""
            />
          </div>
          <center>
            <div className="register">
              <input
                type="submit"
                name="register"
                className="btn-primary"
                defaultValue="Register Badge"
              />
            </div>
          </center>
        </div>
      </form>
    </div>
  </div>
  )
}

export default JobPortal