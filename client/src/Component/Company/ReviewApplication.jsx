import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Companynav from './Companynav';
import { useParams } from 'react-router-dom';

const ReviewApplication = () => {
  const { id } = useParams();
  const { cid } = useParams();
  const { jid } = useParams();
  const { type } = useParams();


  const [showInterviewPassed, setShowInterviewPassed] = useState(false);
  const [showInterviewFailed, setShowInterviewFailed] = useState(false);
  const [biodata, setBiodata] = useState({});
  const [interviewStatus, setInterviewStatus] = useState('');
  const [interview, setInterview] = useState('');

  const handleInformButtonClick = async () => {
    try {
      let newStatus;
      if (document.getElementById('myCheckbox1').checked) {
        newStatus = 'Eligible for aptitudetest';
      } else if (document.getElementById('myCheckbox2').checked) {
        newStatus = 'Not Eligible';
      } else if (document.getElementById('myCheckbox3').checked) {
        newStatus = 'Interview passed';
        setShowInterviewPassed(true);
        setShowInterviewFailed(false);
      } else if (document.getElementById('myCheckbox4').checked) {
        newStatus = 'Interview failed';
        setShowInterviewPassed(false);
        setShowInterviewFailed(true);
      } else {
        console.error('No status selected!');
        return;
      }

      const updateInterviewStatus = async (status) => {
        try {
          const response = await fetch(
            `http://localhost:5000/register/update_status/${cid}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ application_status: status }),
            }
          );

          const data = await response.json();

          if (data.success) {
            console.log('Interview status updated successfully!');
          } else {
            console.error('Failed to update interview status:', data.message);
          }
        } catch (error) {
          console.error('Error updating interview status:', error);
        }
      };

      await updateInterviewStatus(newStatus);
      setInterviewStatus(newStatus);
      console.log('Status update successful!');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };


  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/register/view-userpr/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
          setInterviewStatus(data.data.application_status);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  // College job applications

  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/apply/chinnumol/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setStatus(data.data);
          setInterview(data.data.application_status);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  const updateInterviewStatus = async (status) => {
    try {
      const response = await fetch(
        `http://localhost:5000/apply/update-chinnu/${cid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ application_status: status }),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log('Interview status updated successfully!');
      } else {
        console.error('Failed to update interview status:', data.message);
      }
    } catch (error) {
      console.error('Error updating interview status:', error);
    }
  };

  const handleInformClick = async () => {
    try {
      const checkbox1 = document.getElementById('myCheckbox5');
      const checkbox2 = document.getElementById('myCheckbox6');
      const checkbox3 = document.getElementById('myCheckbox7');
      const checkbox4 = document.getElementById('myCheckbox8');

      let newStatus;
      if (checkbox1.checked) {
        newStatus = 'Eligible for aptitudetest';
      } else if (checkbox2.checked) {
        newStatus = 'Not Eligible';
      } else if (checkbox3.checked) {
        newStatus = 'Interview passed';
        setShowInterviewPassed(true);
        setShowInterviewFailed(false);
      } else if (checkbox4.checked) {
        newStatus = 'Interview failed';
        setShowInterviewPassed(false);
        setShowInterviewFailed(true);
      } else {
        console.error('No status selected!');
        return;
      }

      await updateInterviewStatus(newStatus);
      setInterview(newStatus);
      console.log('Status update successful!');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
      
    <>
      <Companynav />
      <div className="container">
        <h3 className="pb-3 mb-4 font-italic border-bottom">CV of Applicants</h3>
        {type === 'company' && (    
           <>
        <div className="row companysection">
          {category .filter((job) => job._id === cid)  .map((job, index) => (
                       

            <React.Fragment key={index}>
              <div className="col-md-6" style={{ height: 600, backgroundColor: 'whitesmoke' }}>
                <h1>BIO Data</h1>
                <div className="bio-box">
                <p>
                  <strong>Name:</strong> {job.name}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {job.dateofbirth}
                </p>
                <p>
                  <strong>Address:</strong> {job.address}
                </p>
                <p>
                  <strong>Phone No:</strong> {job.phonenumber}
                </p>
                <p>
                  <strong>Alternative Phone No:</strong> {job.alternativemobile}
                </p>
                <p>
                  <strong>Email:</strong> {job.emailaddress}
                </p>
                <p>
                  <strong>Alternative Email:</strong> {job.alternativeemail}
                </p>
                <p>
                  <strong>Education:</strong> {job.education}
                </p>
                <p>
                  <strong>Branch:</strong> {job.branch}
                </p>
                <p>
                  <strong>Passing Year:</strong> {job.year}
                </p>
                <p>
                  <strong>Skills:</strong> {job.skills}
                </p>
                <p>
                  <strong>Tell us more about yourself:</strong>
                  {job.aboutyourself}
                </p>
                </div>
              </div>

              <div className="col-md-6" style={{ height: '600px', backgroundColor: 'whitesmoke' }}>
                <h1>CV -Resume Here</h1>
                <img
                  width="100%"
                  height="500px"
                  src={`/upload/${job.cv}`}
                  alt=""
                />
              </div>
         
              </React.Fragment>))}
        </div>
        <div className="row color-dark" style={{ marginLeft: '100px', marginTop: '50px' }}>
          <div className="col-md-3">
            <input type="checkbox" id="myCheckbox1" name="myCheckbox1" defaultValue="checked" />
            <label htmlFor="myCheckbox1">Eligible for aptitudetest</label>
          </div>
          <div className="col-md-3">
            <input type="checkbox" id="myCheckbox2" name="myCheckbox2" defaultValue="checked" />
            <label htmlFor="myCheckbox2">Not Eligible</label>
          </div>

            <div className="col-md-3">
              <input type="checkbox" id="myCheckbox3" name="myCheckbox3" defaultValue="checked" />
              <label htmlFor="myCheckbox3">Interview passed</label>
            </div>
          
         
            <div className="col-md-3">
              <input type="checkbox" id="myCheckbox4" name="myCheckbox4" defaultValue="checked" />
              <label htmlFor="myCheckbox4">Interview failed</label>
            </div>
         
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={handleInformButtonClick}>
              Inform
            </button> 
          
          </div>
        </div>
        </>)}
        {type === 'college' && (
          <>
        <div className="row collegesection">
          {status .filter((chinnu) => chinnu._id === cid) .map((chinnu, index) => (
                      

            <React.Fragment key={index}>
              <div className="col-md-6" style={{ height: 600, backgroundColor: 'whitesmoke' }}>
                <h1>BIO Data</h1>
                <div className="bio-box">
                <p>
                  <strong>Name:</strong> {chinnu.name}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {chinnu.dateofbirth}
                </p>
                <p>
                  <strong>Address:</strong> {chinnu.address}
                </p>
                <p>
                  <strong>Phone No:</strong> {chinnu.phonenumber}
                </p>
                <p>
                  <strong>Alternative Phone No:</strong> {chinnu.alternativemobile}
                </p>
                <p>
                  <strong>Email:</strong> {chinnu.emailaddress}
                </p>
                <p>
                  <strong>Alternative Email:</strong> {chinnu.alternativeemail}
                </p>
                <p>
                  <strong>Education:</strong> {chinnu.education}
                </p>
                <p>
                  <strong>Branch:</strong> {chinnu.branch}
                </p>
                <p>
                  <strong>Passing Year:</strong> {chinnu.year}
                </p>
                <p>
                  <strong>Skills:</strong> {chinnu.skills}
                </p>
                <p>
                  <strong>Tell us more about yourself:</strong>
                  {chinnu.aboutyourself}
                </p>
                </div>
              </div>

              <div className="col-md-6" style={{ height: '600px', backgroundColor: 'whitesmoke' }}>
                <h1>CV -Resume Here</h1>
                <img
                  width="100%"
                  height="500px"
                  src={`/upload/${chinnu.cv}`}
                  alt=""
                />
              </div>
            </React.Fragment>
          ))}
        </div>
           
        <div className="row color-dark" style={{ marginLeft: '100px', marginTop: '50px' }}>
          <div className="col-md-3">
            <input type="checkbox" id="myCheckbox5" name="myCheckbox5" defaultValue="checked" />
            <label htmlFor="myCheckbox1">Eligible for aptitudetest</label>
          </div>
          <div className="col-md-3">
            <input type="checkbox" id="myCheckbox6" name="myCheckbox6" defaultValue="checked" />
            <label htmlFor="myCheckbox2">Not Eligible</label>
          </div>

            <div className="col-md-3">
              <input type="checkbox" id="myCheckbox7" name="myCheckbox7" defaultValue="checked" />
              <label htmlFor="myCheckbox3">Interview passed</label>
            </div>
          
         
            <div className="col-md-3">
              <input type="checkbox" id="myCheckbox8" name="myCheckbox8" defaultValue="checked" />
              <label htmlFor="myCheckbox4">Interview failed</label>
            </div>
         
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={handleInformClick}>
              Inform
            </button>
          </div>
        </div></>
        )} 
      </div>
      <PublicUserFooter />
    </>
  );
};

export default ReviewApplication;