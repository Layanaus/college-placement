import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Placementofficernav from './Placementofficernav'

const StudentManage = () => {
  return (
    <>
    <Placementofficernav/>
    <div className="container">
  <div className="row">
    <div className="col-lg-10 offset-md-1">
      <div className="card panel-table">
        <div className="card-header" style={{textAlign:"center",}}>
          <h2 >Manage Student</h2>
          <div className="row" />
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered table-list">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mob No</th>
                <th>
                 Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>9072823381</td>
                {/* <td align="center">
                  {" "}
                  <a className="btn btn-secondary">
                    <em className="fa fa-check" />
                  </a>
                  <a className="btn btn-danger">

                    <em className="fa fa-close" />
                  </a>
                </td> */}
           
           <td align="center">
  <a className="btn btn-success" style={{marginRight:'5px'}}>
    <em className="fa fa-check" />
  </a>
  <a className="btn btn-danger">
    <em className="fa fa-times" />
  </a>
</td>


              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
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

export default StudentManage