import React from 'react'
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const ViewAppliedstudents = () => {
  return (
    <>
    <Placementofficernav/>
    <div className='container'>
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
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Java</td>
        <td>
          <a href="Reviewapplication">View Cv &amp; More Detail</a>
        </td>
        <td>interview passed</td>
        
      </tr>
      <tr>
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
        
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Graphics Design</td>
        <td>
          <a href="Reviewapplication">View Cv &amp; More Detail</a>
        </td>
        <td>Eligible For Test</td>
      </tr>
      <tr>
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
        
      </tr>
    </tbody>
  </table>
  </div>
  <PublicUserFooter/>
  </>
  )
}


export default ViewAppliedstudents