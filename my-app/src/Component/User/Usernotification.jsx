import React from 'react'
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Usernotification = () => {
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
            <a className="nav-link active" aria-current="page" href="#">
              Job vaccancies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Viewinterviewstatus">
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
          <h4>Join Notification</h4>
          <p>
            Thanks so much for your message. We check e-mail frequently and will
            try our best to respond to your inquiry.
          </p>
        </div>
        <div className="notify errorbox">
          <h4>apco Interview Date</h4>
          <p>
            You did not set the proper return e-mail address. Please fill out
            the fields and then submit the form.
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

export default Usernotification