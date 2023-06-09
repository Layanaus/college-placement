import React from 'react'
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const InterviewStatus = () => {
    
  return (
    <>
    <Usernav/>
    <div className="container">
      <div
        className="row justify-content-start mb-5"
        style={{ marginTop: 50, backgroundColor: "lightblue", color: "white" }}
      >
        <div className="col-md-4">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="Usernotification">
                Job vaccancies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Interview Statuses
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div id="w">
        <div id="content">
          {/* Icons source http://dribbble.com/shots/913555-Flat-Web-Elements */}
          <div className="notify successbox">
            <h4>Jws Steels</h4>
            <p>
              Thanks so much for your intrest to aplly for an job in our company.
              We are very glad to ionform you that you are eliginle for attending
              our exclusive interview.Bear in mind that it will be conducted on
              12/09/2022 between 10.30 and 12.00 pm
            </p>
          </div>
          <div className="notify errorbox">
            <h4>Nesto</h4>
            <p>
              You did not set for the job that you have applied for.keep
              retrying..Please fill out the fields and then submit the form.
            </p>
          </div>
        </div>
        {/* @end #content */}
      </div>
      {/* @end #w */}
    </div>
    <PublicUserFooter/>
  </>
  
  )
}

export default InterviewStatus