import React from 'react'
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import ManageJobportal from './ManageJobportal'

const CreateJobportal = () => {
  return (
    <>
    <Placementofficernav/>
    <div className="container">
    <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
      <i className="fa fa-book-reader" />
      Create job portal
    </h3>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Add latest job vaccancies</div>
          <div className="card-body">
            <form
              name="my-form"
              onsubmit="return validform()"
              action="success.php"
              method=""
            >
              <div className="form-group row">
                <label
                  htmlFor="full_name"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Company Name
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    id="full_name"
                    className="form-control"
                    name="full-name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="location"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Company Location
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    className="form-control"
                    name="location"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="jobtype"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Job Name
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    className="form-control"
                    name="description"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="description"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Job Description
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    id="description"
                    className="form-control"
                    name="description"
                  />
                </div>
              </div>
              {/* <div className="form-group row">
                <label
                  htmlFor="category"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Job Category
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="category"
                    className="form-control"
                    name="category"
                  />
                </div>
              </div> */}
              <div className="form-group row">
  <label htmlFor="category" className="col-md-4 col-form-label text-md-right">
    Job Category
  </label>
  <div className="col-md-6" >
    <select id="category" className="form-control" name="category">
      <option value="">Select Job Category</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
    </select>
  </div>
</div>

              <div className="form-group row">
                <label
                  htmlFor="email_address"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Experience
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    id="email_address"
                    className="form-control"
                    name="email-address"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="user_name"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Required Qualification
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    id="user_name"
                    className="form-control"
                    name="username"
                  />
                </div>
              </div>
             
              <div className="form-group row">
                <label
                  htmlFor="phone_number"
                  className="col-md-4 col-form-label text-md-right"
                >
                   Salary Range
                </label>
                <div className="col-md-6">
                  <input  id="phone_number" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="present_address"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Company contact
                </label>
                <div className="col-md-6">
                  <input
                    // type="text"
                    id="present_address"
                    className="form-control"
                  />
                </div>
              </div>
              
              <div className="form-group row">
                <label
                  htmlFor="present_address"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Date untill
                </label>
                <div className="col-md-6">
                  <input
                    type="date"
                    id="present_address"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Create Job 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <PublicUserFooter/>
  </>
  )
}

export default CreateJobportal