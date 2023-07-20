import React, { useEffect, useState } from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'
import { Link } from 'react-router-dom'

const Applications = () => {
  const company_id=localStorage.getItem('login_id');
  console.log(company_id);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/register/view-applicants')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setApplicants(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);


  return (
    <>
    <Companynav/>
  <div className="container">
    <table className="table" style={{ borderRadius: 15 }}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Attachment</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
      {applicants.filter(job => job.company_id === company_id).map((job) => (
      <tr>
          <th scope="row">1</th>
          <td>{job.firstname}</td>
          <td>{job.jobname}</td>
        
          <td>
            {/* <a href="Reviewapplication">View Cv &amp; More Detail</a> */}
            <Link to={`/Reviewapplication/${job.login_id}`}>View Cv &amp; More Detail</Link>
          </td>
          <td>{job.application_status}</td>
          
        </tr>
        ))}
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Java</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>ineligible for interview</td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Java</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>Not Examined</td>
          
        </tr> */}
        {/* <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Graphics Design</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>Eligible For Test</td>
        </tr> */}
        {/* <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>Php Developer</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>Not Eligible Test</td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Java</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>Eligible for interview</td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Java</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>interview failed</td>
          
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Java</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
          <td>ineligible for interview</td>
          
        </tr> */}
      </tbody>
    </table>
    <button className='btn btn-primary' style={{width:'100%'}}>Publish Interview Result</button>
  </div>
  
  <PublicUserFooter/>
</>

  )
}

export default Applications