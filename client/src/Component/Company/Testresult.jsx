import React, { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Testresult = () => {
  const company_id = localStorage.getItem('login_id');
  const [users, setUsers] = useState([]);
  const [jobtype, setJobtype] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobtype(data.data); // Assuming 'data.data' contains job types
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });

    fetch('http://localhost:5000/result/view-aptitude-result')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data); // Assuming 'data.data' contains test results
        }
      })
      .catch((error) => {
        console.error('Error fetching test results:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-jobs/${company_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobtype(data.data); // Assuming 'data.data' contains job types specific to the company
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [company_id]);

  const inputchange = (event) => {
    const selectedValue = event.target.value;
    setSelectedJob(selectedValue);
    setCurrentPage(1); // Reset page number when job selection changes
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const filteredResults = users.filter((user) => user.jobtype === selectedJob);
  const currentResults = filteredResults.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 
  return (
    <>
      <Companynav/>
      <div className="container">
      <div className="form-row">
      <select name="jobtype" onChange={inputchange} value={selectedJob}>
            <option value="">Select job category</option>
            {jobtype.map((job) => (
              <option key={job._id} value={job.jobname}>
                {job.jobname}
              </option>
            ))}
          </select>
        <span className="select-btn">
          <i className="zmdi zmdi-chevron-down" />
        </span>
      </div>
        <table className="table" style={{ borderRadius: 15 }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Score</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {currentResults.map((user, index) => (
              <tr key={index}>
                <th scope="row">{indexOfFirstResult + index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td>{`${user.marks}/${user.totalmarks}`}</td>
                <td>{user.passed === 'false' ? 'failed' : 'passed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row justify-content-center" style={{ marginTop: '30px' }}>
        <nav aria-label="Page navigation justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(users.length / resultsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${currentPage === Math.ceil(users.length / resultsPerPage) ? 'disabled' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(users.length / resultsPerPage)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <PublicUserFooter />
    </>
  );
};

export default Testresult;
