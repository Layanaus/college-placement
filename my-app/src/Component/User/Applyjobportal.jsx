import React from 'react'
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Applyjobportal = () => {
  return (
    <>
    <Usernav/>
    <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
            <form
          method="POST"
          className="w-100 rounded p-4 border bg-dark"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <label className="d-block mb-4">
            <span className="d-block mb-2">Your name</span>
            <input
              required=""
              name="name"
              type="text"
              className="form-control"
              placeholder="Type your full name"
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Email address</span>
            <input
              required=""
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your Email"
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Years of experience</span>
            <select name="experience" className="custom-select">
              <option>Less than a year</option>
              <option>1 - 2 years</option>
              <option>2 - 4 years</option>
              <option>4 - 7 years</option>
              <option>7 - 10 years</option>
              <option>10+ years</option>
            </select>
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Tell us more about yourself</span>
            <textarea
              name="message"
              className="form-control"
              rows={3}
              placeholder="What motivates you?"
              defaultValue={""}
            />
          </label>
          <div className="mb-4">
            <label className="d-block mb-2">Your CV</label>
            <div className="form-control h-auto">
              <input
                required=""
                name="cv"
                type="file"
                className="form-control-file"
              />
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="custom-control custom-radio">
                <input
                  name="remote"
                  defaultValue="yes"
                  type="radio"
                  className="custom-control-input"
                  defaultChecked=""
                />
                <span className="d-inline-block mt-1 custom-control-label">
                  You'd like to work remotely
                </span>
              </label>
            </div>
            <div>
              <label className="custom-control custom-radio">
                <input
                  name="remote"
                  defaultValue="no"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="d-inline-block mt-1 custom-control-label">
                  You'd prefer to work onsite
                </span>
              </label>
            </div>
          </div>
          <div className="d-block text-right">
            <div className="mb-3">
              <button type="submit" className="btn btn-primary px-3">
                Apply
              </button>
            </div>
          </div>
        </form>
            </div>
          </div>
        </div>
        <PublicUserFooter/>
        </>
  )
}

export default Applyjobportal