import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'

const Applications = () => {
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
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Java</td>
          <td>Not Examined</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Graphics Design</td>
          <td>Eligible</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>Php Developer</td>
          <td>Not Eligible</td>
          <td>
            <a href="Reviewapplication">View Cv &amp; More Detail</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="container"></div>
  <PublicUserFooter/>
</>

  )
}

export default Applications