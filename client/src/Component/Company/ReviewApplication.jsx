import React, {useState}from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companybody from './Companybody'
import Companynav from './Companynav'

const ReviewApplication = () => {
  const [showInterviewPassed, setShowInterviewPassed] = useState(false);
  const [showInterviewFailed, setShowInterviewFailed] = useState(false);

  const handleInformButtonClick = () => {
    if (document.getElementById('myCheckbox1').checked) {
      setShowInterviewPassed(true);
      setShowInterviewFailed(true);
    } else {
      setShowInterviewPassed(false);
      setShowInterviewFailed(false);
    }
  };
  return (
    <>
    <Companynav/>
    <div className="container">
  
  <h3 className="pb-3 mb-4 font-italic border-bottom">CV of John Doe</h3>
  <div className="row">
    <div
      className="col-md-6"
      style={{ height: 600, backgroundColor: "whitesmoke" }}
    >
      <h1>BIO Data</h1>
      <div className="bio-box">
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Date of Birth:</strong> 25
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Phone No:</strong> 9446339649
        </p>
        <p>
          <strong>Email:</strong> john.doe@example.com
        </p>
       
       
       
        <p>
          <strong>Education:</strong> Bachelor's Degree in Computer Science
        </p>
        <p>
          <strong>Year Level:</strong> First year
        </p>
        <p>
          <strong>Skills:</strong> HTML, CSS, JavaScript, Python
        </p>
        <p>
          <strong>Experience:</strong> 3 years as a Web Developer
        </p>
        <p>
          <strong>Tell us more about yourself:</strong>Iam good software developer
        </p>
      </div>
      
    </div>
    <div
      className="col-md-6"
      style={{ height: '600px', backgroundColor: "whitesmoke" }}
    >
      <h1>CV -Resume Here</h1>
      <img
        width="100%" height='500px'
        src="https://img.freepik.com/free-vector/minimalist-cv-template_23-2148899951.jpg?w=2000"
        alt=""
      />
    </div>
  </div>
  <div className="row color-dark" style={{ marginLeft: '100px', marginTop: '50px' }}>
      <div className="col-md-3">
        <input
          type="checkbox"
          id="myCheckbox1"
          name="myCheckbox1"
          defaultValue="checked"
        />
        <label htmlFor="myCheckbox1">Eligible for aptitudetest</label>
      </div>
      <div className="col-md-3">
        <input
          type="checkbox"
          id="myCheckbox2"
          name="myCheckbox2"
          defaultValue="checked"
        />
        <label htmlFor="myCheckbox2">Not Eligible</label>
      </div>
      {showInterviewPassed && (
        <div className="col-md-3">
          <input
            type="checkbox"
            id="myCheckbox3"
            name="myCheckbox3"
            defaultValue="checked"
          />
          <label htmlFor="myCheckbox3">Interview passed</label>
        </div>
      )}
      {showInterviewFailed && (
        <div className="col-md-3">
          <input
            type="checkbox"
            id="myCheckbox4"
            name="myCheckbox4"
            defaultValue="checked"
          />
          <label htmlFor="myCheckbox4">Interview failed</label>
        </div>
      )}
      <div className="col-md-3">
        <button className="btn btn-primary" onClick={handleInformButtonClick}>
          Inform
        </button>
      </div>
    </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default ReviewApplication