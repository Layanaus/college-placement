import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import AdminNav from './AdminNav';
import PlacementOfficerReg from '../Registration/PlacementOfficerReg';
import Placementofficernav from '../PlacementOfficer/Placementofficernav';
import { useParams } from 'react-router-dom';

const Adviewjobdeatils = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/register/view-jobdescription/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategory(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <AdminNav />
      <div className="container">
        <h1>Job Details</h1>
        <ul>
          {category.map((job, index) => (
            <li key={index}>{job.jobdescription}</li>
          ))}
        </ul>
        <ul>
         
          
          <li>
            {/* <table>
              <tr>
                <td>Job Location</td>
                <td>calicut</td>
              </tr>
              <tr>
                <td>Job Type</td>
                <td>python Developer</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>12 hrs</td>
              </tr>
              <tr>
                <td>Qualifications</td>
                <td>bca</td>
              </tr>
              <tr>
                <td>Benefits</td>
                <td>high demosation</td>
              </tr>
              <tr>
                <td>Salary or Compensation</td>
                <td>50 k</td>
              </tr>
              <tr>
                <td>Application Deadline</td>
                <td>12/25/2022</td>
              </tr>
            </table> */}
          </li>
        </ul>
      </div>

      <PublicUserFooter />
    </>
  );
};

export default Adviewjobdeatils;
