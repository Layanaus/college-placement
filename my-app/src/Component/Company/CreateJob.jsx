import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'

const CreateJob = () => {
  return (
    <>
    <Companynav/>
    <div className="container">
      <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
        <i className="fa fa-book-reader" />
        Open Job Vaccancy Announcement
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
                    Vaccancy
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="full_name"
                      className="form-control"
                      name="full-name"
                    />
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
                      type="text"
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
                    Qualification
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
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
                    Expected Salary
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="phone_number"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="present_address"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Branch
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="present_address"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="btn btn-primary">
                    Send Job Alert
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <h3 className="pb-3 mb-5 font-italic border-bottom mt-5">
        <i className="fa fa-book-reader" /> Opened Job Announcements
      </h3>
      <div className="row justify-content-center">
        <div className="col-md-8 mb-5">
          <div className="card">
            <div className="card-header text text-center">Python Developer</div>
            <div className="card-body text-center">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="Application" className="btn btn-primary mr-2">
  View Applicants
</a>
<a href="Notifyinterview" className="btn btn-primary">
  Notify Interview
</a>

            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 mb-5">
          <div className="card">
            <div className="card-header text text-center">Python Developer</div>
            <div className="card-body text-center">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="Application" className="btn btn-primary mr-2">
  View Applicants
</a>
<a href="Notifyinterview" className="btn btn-primary">
  Notify Interview
</a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="overlay" className="overlay" style={{ display: "none" }}>
      <div className="message-box">
        <h3>Pop-up Message</h3>
        <p>
          You have already Notified your interview schedulings!Dou you want to
          Upadate?
        </p>
        <button onclick="redirectToPage()" className="btn btn-primary">
          Yes
        </button>
        <button onclick="hidenotifyalert()" className="btn btn-primary">
          No
        </button>
      </div>
    </div>
    <PublicUserFooter/>
  </>
  
  )
}

export default CreateJob