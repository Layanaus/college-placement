import React from 'react'
import Companynav from './Companynav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Viewjob = () => {
  return (
    <>
    <Companynav/>
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
              <h5 className="card-title">1400 Applications Received</h5>
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
            

            <div>Teaching</div>
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
              <h5 className="card-title">Total 700 Applications Received</h5>


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
            

            <div>Clerk</div>
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
              Receiving Applicants still 12/09/2022
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

export default Viewjob