import React from 'react'
import Companynav from './Companynav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Testresult = () => {
  return (
    <>
    <Companynav/>
    <div className="container">
    <div className="nav-item dropdown">
            <a
              href=""
              className="nav-link dropdown-toggle active"
              data-toggle="dropdown"
            >
              Category
            </a>
            <div className="dropdown-menu m-0">
            <a href="CreateJob" className="dropdown-item">
              Python Developer
            </a>
            <a href="Viewjob" className="dropdown-item">
              System Analyst
            </a>
            <a href="Viewjob" className="dropdown-item">
              MERN Stack Developer
            </a>
            </div>
            </div> 
    <table className="table" style={{ borderRadius: 15 }}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">College</th>
          <th scope="col">Date</th>
          <th scope="col">Score</th>
          <th scope="col">Result</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Layana</td>
          <td>PPTMYHSS Arts and science</td>
          <td>25-08-2023</td>
          <td>13/25</td>
          <td>Passed</td>
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Shamliya</td>
          <td>CCSIT Kuttippuram</td>
          <td>7-05-2014</td>
          <td>10/25</td>
          <td>Failed</td>
          
        
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Shana</td>
          <td>MES Kuttippuram</td>
          <td>8-04-2023</td>
          <td>15/25</td>
          <td>Passed</td>
           
          
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jacob</td>
          <td>University Campus</td>
          <td>5-03-2023</td>
          <td>20/25</td>
          <td>Passed</td>
           
        </tr>
        <tr>
          </tr>
      </tbody>
    </table>
  </div>
  <div className="container"></div>
    <PublicUserFooter/>
    </>
    
  )
}

export default Testresult