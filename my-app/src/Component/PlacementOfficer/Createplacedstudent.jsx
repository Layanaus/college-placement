import React from 'react'
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import ManageJobportal from './ManageJobportal'

const Createplacedstudent = () => {
  return (
    <>
    <Placementofficernav/>
    <div className="container">
    <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
      <i className="fa fa-book-reader" />
      Create Placed Students in Our College
    </h3>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Add Placed Students in Our College</div>
          <div className="card-body">
            <form
              name="my-form"
              onsubmit="return validform()"
              action="success.php"
              method=""
            >
           
              <div className="form-group row">
                <label
                  htmlFor="jobtype"
                  className="col-md-4 col-form-label text-md-right"
                >
                  Student Name
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
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
                  Description
                </label>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="description"
                    className="form-control"
                    name="description"
                  />
                </div>
              </div>
              <div className="form-group row">
  <label htmlFor="image" className="col-md-4 col-form-label text-md-right">
    Upload Image
  </label>
  <div className="col-md-6">
    <input
      type="file"
      id="image"
      className="form-control-file"
      name="image"
    />
  </div>
</div>

              
        
           
              
              
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Submit
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

export default Createplacedstudent