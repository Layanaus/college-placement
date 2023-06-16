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
          <div className="card-header text text-center d-flex justify-content-between">
            

            <div>Python Developer</div>
            <div className="dropdown">
 <button className="dropbtn">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={16}
     height={16}
     fill="currentColor"
     className="bi bi-three-dots-vertical"
     viewBox="0 0 16 16"
   >
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
   </svg>
 </button>
 <div className="dropdown-content">
 <a href="#">Edit</a>
   <a href="#">Remove</a>
 </div>
</div> 
             </div>
            <div className="card-body text-center">
              <h5 className="card-title">1400 Applications Recieved</h5>
              <p className="card-text">
              Aptitude Test in Ongoing..
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
          <div className="card-header text text-center d-flex justify-content-between">
            

            <div>Python Developer</div>
            <div className="dropdown">
 <button className="dropbtn">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={16}
     height={16}
     fill="currentColor"
     className="bi bi-three-dots-vertical"
     viewBox="0 0 16 16"
   >
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
   </svg>
 </button>
 <div className="dropdown-content">
 <a href="#">Edit</a>
   <a href="#">Remove</a>
 </div>
</div> 
             </div>
            <div className="card-body text-center">
              <h5 className="card-title">Total 700 Applicatioons received</h5>


              <p className="card-text">
          <b style={{color:'red'}}>   Invite Them to Attend a Aptitude Test</b> 
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
          <div className="card-header text text-center d-flex justify-content-between">
            

            <div>Python Developer</div>
            <div className="dropdown">
 <button className="dropbtn">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     width={16}
     height={16}
     fill="currentColor"
     className="bi bi-three-dots-vertical"
     viewBox="0 0 16 16"
   >
     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
   </svg>
 </button>
 <div className="dropdown-content">
 <a href="#">Edit</a>
   <a href="#">Remove</a>
 </div>
</div> 
             </div>
            <div className="card-body text-center">
              <h5 className="card-title">700 Applicants</h5>


              <p className="card-text">
              Recieving Applicants still 12/09/2022
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
    <nav aria-label="Page navigation justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
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