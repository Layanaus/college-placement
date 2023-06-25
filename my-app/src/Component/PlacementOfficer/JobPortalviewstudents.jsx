import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Placementofficernav from './Placementofficernav'


const JobPortalviewstudents = () => {
  return (
    <>
    <Placementofficernav/>
    <div className='container'>
      <h1 className='title' style={{textAlign:'center'}}>Applicant's Job Status</h1>
      <div className="input-group" style={{marginTop:'50px',marginBottom:'30px'}}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search Applicant's Name"
          aria-label="Search"
          aria-describedby="search-addon"
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
          
          <th scope="col">Applied Job Status</th>
          
    
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Layana</td>
          <td>Urath House, Edappal</td>
          <td>9895666255</td>
         
          <td>Eligible for Aptitude Test</td>

         
         
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Shamliya</td>
          <td>mangattil house, tirur</td>
          <td>7034939989</td>
             
          <td>In Eligible</td>                    
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Shana</td>
          <td>pk house, kuttippuram</td>
          <td>9946191742</td>
          
          <td>Interview Failed</td>         
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jacob</td>
          <td>hg House, calicut</td>
          <td>7592915905</td>
                
                <td>Interview Failed</td>
        </tr>
        <tr>
          </tr>
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
    <PublicUserFooter/>
    </>
    
  )
}

export default JobPortalviewstudents