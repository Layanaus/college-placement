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
          className="w-100 rounded p-4 border bg-light"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <label className="d-block mb-4">
            <span className="d-block mb-2">Enter Your Name</span>
            <input
              required=""
              name="address"
              type="text"
              className="form-control"
              placeholder="Type your full name"
            />
          </label>
          <label className="d-block mb-4">
  <span className="d-block mb-2">Date Of Birth</span>
  <input
    name="DOB"
    type="date"
    className="form-control"
    placeholder="Enter your Date of Birth"
  />
</label>

          <label className="d-block mb-4">
            <span className="d-block mb-2">Address</span>
            <textarea
              name="address"
              type="text"
              className="form-control"
              placeholder="Enter your Address"
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Phone Number</span>
            <input
              required=""
              name="phone"
              type="number"
              className="form-control"
              placeholder="Enter your Phone Number"
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
            <span className="d-block mb-2">Enter Your Education</span>
            <input
              required=""
              name="education"
              type="text"
              className="form-control"
              placeholder="Type your Current Education Level"
            />
          </label>
          <label className="d-block mb-4">
            <span className="d-block mb-2">Enter Your Skills</span>
            <input
              required=""
              name="skills"
              type="text"
              className="form-control"
              placeholder="Type your Skills"
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
         
          
          <div className="d-flex justify-content-center">
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