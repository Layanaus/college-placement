import React from 'react'
import Companynav from './Companynav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Colleges = () => {
  return (
    <>
    <Companynav/>
    <div className="container">
    <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search Jobs"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-primary">
          Search 
        </button>
      </div>
    <h1 className='mt-5'>Colleges</h1>
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between">
        <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
        </li>
      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>

      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span>Harvard </span><a href='location' className='btn btn-primary'>Request</a>
      </li>
    </ul>
  </div>
  <div className="row justify-content-center" style={{marginTop:'30px'}}>
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
  
    <PublicUserFooter/>
    </>

  )
}

export default Colleges