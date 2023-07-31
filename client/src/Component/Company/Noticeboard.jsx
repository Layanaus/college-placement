import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';
import Usernav from '../User/Usernav';

const Noticeboard = () => {
  const { id } = useParams();
  const [jobList, setJobList] = useState([]);
  const [sanitha, setSanitha] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-applicants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobList(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/apply/view-layana/${id}`)
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

  const filteredJobList = jobList.filter((applicant) =>
    applicant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSanitha = sanitha.filter((applicant) =>
    applicant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Usernav />
      <div className="container">
        <h1 className="title" style={{ textAlign: 'center' }}>
          Applicant's Job Status
        </h1>
        <div className="input-group" style={{ marginTop: '50px', marginBottom: '30px' }}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search Applicant's Name"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" className="btn btn-outline-primary">
            Search
          </button>
        </div>
        <table className="table" style={{ borderRadius: 15 }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile No</th>
              <th scope="col">College</th>
              <th scope="col">Applied Job Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobList.map((applicant, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{applicant.name}</td>
                <td>{applicant.address}</td>
                <td>{applicant.phonenumber}</td>
                <td>{applicant.collegename}</td>
                <td>{applicant.application_status}</td>
              </tr>
            ))}
            {filteredSanitha.map((applicant, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{applicant.name}</td>
                <td>{applicant.address}</td>
                <td>{applicant.phonenumber}</td>
                <td>{applicant.collegename}</td>
                <td>{applicant.application_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
      <PublicUserFooter />
    </>
  );
};

export default Noticeboard;
