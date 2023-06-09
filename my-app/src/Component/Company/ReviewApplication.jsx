import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companybody from './Companybody'
import Companynav from './Companynav'

const ReviewApplication = () => {
  return (
    <>
    <Companynav/>
    <div className="container">
  <div className="row color-dark">
    <div className="col-md-4">
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        defaultValue="checked"
      />
      <label htmlFor="myCheckbox">Eligible for attend Interview</label>
    </div>
    <div className="col-md-4">
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        defaultValue="checked"
      />
      <label htmlFor="myCheckbox">Not at all Eligible</label>
    </div>
    <div className="col-md-4">
      <button className="btn btn-primary">Inform</button>
    </div>
  </div>
  <h3 className="pb-3 mb-4 font-italic border-bottom">CV of John Doe</h3>
  <div className="row">
    <div
      className="col-md-6"
      style={{ height: 500, backgroundColor: "whitesmoke" }}
    >
      <h1>BIO Data</h1>
      <div className="bio-box">
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Age:</strong> 25
        </p>
        <p>
          <strong>Email:</strong> john.doe@example.com
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Age:</strong> 25
        </p>
        <p>
          <strong>Education:</strong> Bachelor's Degree in Computer Science
        </p>
        <p>
          <strong>Skills:</strong> HTML, CSS, JavaScript, Python
        </p>
        <p>
          <strong>Experience:</strong> 3 years as a Web Developer
        </p>
      </div>
    </div>
    <div
      className="col-md-6"
      style={{ height: 500, backgroundColor: "whitesmoke" }}
    >
      <h1>CV -Resume Here</h1>
      <img
        width="100%"
        src="https://img.freepik.com/free-vector/minimalist-cv-template_23-2148899951.jpg?w=2000"
        alt=""
      />
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default ReviewApplication