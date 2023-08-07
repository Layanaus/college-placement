import React, { useEffect, useState } from 'react';
import Usernav from './Usernav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Usernotification = () => {
  const login_id = localStorage.getItem('login_id');
  const [notice, setNotice] = useState([]);
  const [sanitha, setSanitha] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/notify/view-notified-interview')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setNotice(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:5000/notify/view-sanitha-interview')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSanitha(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <Usernav />
      <div className="container">
        <div className="row justify-content-start mb-5" style={{ marginTop: 50, backgroundColor: "lightblue", color: "white" }}>
          <div className="col-md-4">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Job vacancies
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
            {notice.filter((notification) => notification.data.application_status ==="woww!..Aptitude Test Passed").map((notification) => (
              <div className="alert alert-success" role="alert" key={notification._id}>
                <h4 className="alert-heading">{notification.company.companyname}</h4>
                <p>
                  {notification.message}
                </p>
                <p className="mb-0">
                  <p> <b>Interview Details:</b></p>
                  Interview Date: {notification.date},
                  Location: {notification.company.companylocation}
                </p>
                {/* <p style={{ marginLeft: '800px' }}>Aptitude {notification.data.application_status}</p> */}
              </div>
            ))}
          </div>
          <div id="content">
            {sanitha.filter((notification) => notification.data.application_status ==="woww!..Aptitude Test Passed").map((notification) => (
              <div className="alert alert-success" role="alert" key={notification._id}>
                <h4 className="alert-heading">{notification.company.companyname}</h4>
                <p>
                  {notification.message}
                </p>
                <p className="mb-0">
                  <p> <b>Interview Details:</b></p>
                  Interview Date: {notification.date},
                  Location: {notification.company.companylocation}
                </p>
                {/* <p style={{ marginLeft: '800px' }}>Aptitude {notification.data.application_status}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <PublicUserFooter />
    </>
  );
}

export default Usernotification;
