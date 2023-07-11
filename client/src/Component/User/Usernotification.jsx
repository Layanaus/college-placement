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
  <h4 class="alert-heading">Wipro</h4>
  <p>We hope this message finds you well. We are delighted to inform you that you have been selected for an interview for an exciting opportunity that aligns with your skills and interests. Congratulations on reaching this stage!

We were impressed by your [mention specific qualities, achievements, or experiences that stood out] and believe you have the potential to contribute significantly to the [organization/event/program] we represent.</p>

  <p class="mb-0">Interview Details:
Date: [Date of the interview]
Time: [Time of the interview]
Location: [Physical location or virtual platform]</p>
</div>
        {/* Icons source http://dribbble.com/shots/913555-Flat-Web-Elements */}
        <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Infosys</h4>
  <p>We hope this message finds you well. We are delighted to inform you that you have been selected for an interview for an exciting opportunity that aligns with your skills and interests. Congratulations on reaching this stage!

We were impressed by your [mention specific qualities, achievements, or experiences that stood out] and believe you have the potential to contribute significantly to the [organization/event/program] we represent.</p>

  <p class="mb-0">Interview Details:
Date: [Date of the interview]
Time: [Time of the interview]
Location: [Physical location or virtual platform]</p>
</div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Global</h4>
  <p>We hope this message finds you well. We are delighted to inform you that you have been selected for an interview for an exciting opportunity that aligns with your skills and interests. Congratulations on reaching this stage!We were impressed by your [mention specific qualities, achievements, or experiences that stood out] and believe you have the potential to contribute significantly to the [organization/event/program] we represent.</p>

  <p class="mb-0">Interview Details:
Date: [Date of the interview]
Time: [Time of the interview]
Location: [Physical location or virtual platform]</p>
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