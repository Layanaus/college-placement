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
      <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
        {/* Icons source http://dribbble.com/shots/913555-Flat-Web-Elements */}
        <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>

  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
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