import React, { useEffect, useState } from 'react';
import Companynav from './Companynav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Testresult = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserJobType, setSelectedUserJobType] = useState("");
  const [selectedJobJobType, setSelectedJobJobType] = useState("");
  const [showUserResults, setShowUserResults] = useState(true);
  const resultsPerPage = 10;
  const [selectedJobType, setSelectedJobType] = useState("");

  useEffect(() => {
    const userEndpoint = selectedUserJobType
      ? `http://localhost:5000/result/view-aptitude-result?jobtype=${selectedUserJobType}`
      : 'http://localhost:5000/result/view-aptitude-result';

    fetch(userEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user test results:', error);
      });
  }, [selectedUserJobType]);

  useEffect(() => {
    const jobEndpoint = selectedJobJobType
      ? `http://localhost:5000/result/view-aptitude-results2?jobtype=${selectedJobJobType}`
      : 'http://localhost:5000/result/view-aptitude-results2';

    fetch(jobEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJobs(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching job results:', error);
      });
  }, [selectedJobJobType]);

  const handleUserPaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleJobPaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUserView = () => {
    setShowUserResults(true);
    setCurrentPage(1);
  };

  const handleJobView = () => {
    setShowUserResults(false);
    setCurrentPage(1);
  };

  const results = showUserResults ? users : jobs;
  const paginateHandler = showUserResults ? handleUserPaginate : handleJobPaginate;
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.filter((result) => selectedJobType === "" || selectedJobType === result.jobtype)
                                .slice(indexOfFirstResult, indexOfLastResult);

  return (
    <>
      <Companynav />
      <div className="container">
      <div className="form-row" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
  <button
    style={{
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }}
    onClick={handleUserView}
  >
    Company
  </button>
  <button
    style={{
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }}
    onClick={handleJobView}
  >
    Job Portal
  </button>
</div>

        <div className="form-row">
          <label>Select Job:</label> 
        <select
        style={{marginLeft:'10px'}}
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
          >
            <option value="">Select {showUserResults ? 'user' : 'job'} category</option>
            {[...new Set(results.map((result) => result.jobtype))].map((uniqueJobType) => (
              <option key={uniqueJobType} value={uniqueJobType}>
                {uniqueJobType}
              </option>
            ))}
          </select>
        </div>
        <table className="table" style={{ borderRadius: 15 }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Job name</th>
              <th scope="col">Score</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {currentResults.map((result, index) => (
              <tr key={indexOfFirstResult + index}>
                <th scope="row">{indexOfFirstResult + index + 1}</th>
                <td>{result.firstname}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.date}</td>
                <td>{result.jobtype}</td>
                <td>{`${result.marks}/${result.totalmarks}`}</td>
                <td>{result.passed === 'false' ? 'failed' : 'passed'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
          <nav aria-label="Page navigation justify-content-center">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginateHandler(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: Math.ceil(results.length / resultsPerPage) }).map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => paginateHandler(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(results.length / resultsPerPage) ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginateHandler(currentPage + 1)}
                  disabled={currentPage === Math.ceil(results.length / resultsPerPage)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Testresult;
