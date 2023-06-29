import React from 'react'
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Viewcompanyresponse = () => {
  return (
    <>
    <Placementofficernav/>
    <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="main-box clearfix">
        <div className="table-responsive">
          <table className="table user-list">
            <thead>
              <tr>
                <th>
                  <span>Company Name</span>
                </th>
                <th>
                  <span>Date</span>
                </th>
                <th className="text-center">
                  <span>Status</span>
                </th>
                <th>
                  <span>Email</span>
                </th>
                <th><span>Action</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                 
                  <span className="user-subhead">Admin</span>
                </td>
                <td>2013/08/08</td>
                <td className="text-center">
                  <span className="label label-default">Approved</span>
                </td>
                <td>
                  <a href="#">mila@kunis.com</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                 
                 
                  <span className="user-subhead">Member</span>
                </td>
                <td>2013/08/12</td>
                <td className="text-center">
                  <span className="label label-success">Reject</span>
                </td>
                <td>
                  <a href="#">marlon@brando.com</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>

              </tr>
              <tr>
                <td>
                 
                
                  <span className="user-subhead">Registered</span>
                </td>
                <td>2013/03/03</td>
                <td className="text-center">
                  <span className="label label-danger">Approved</span>
                </td>
                <td>
                  <a href="#">jack@nicholson</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                
                  <span className="user-subhead">Registered</span>
                </td>
                <td>2004/01/24</td>
                <td className="text-center">
                  <span className="label label-warning">Reject</span>
                </td>
                <td>
                  <a href="#">humphrey@bogart.com</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                  
                
                  <span className="user-subhead">Admin</span>
                </td>
                <td>2013/12/31</td>
                <td className="text-center">
                  <span className="label label-success">Approved</span>
                </td>
                <td>
                  <a href="#">spencer@tracy</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                
                 
                  <span className="user-subhead">Admin</span>
                </td>
                <td>2013/08/08</td>
                <td className="text-center">
                  <span className="label label-default">Reject</span>
                </td>
                <td>
                  <a href="#">mila@kunis.com</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                  
              
                  <span className="user-subhead">Member</span>
                </td>
                <td>2013/08/12</td>
                <td className="text-center">
                  <span className="label label-success">Approved</span>
                </td>
                <td>
                  <a href="#">marlon@brando.com</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                 
                
                  <span className="user-subhead">Registered</span>
                </td>
                <td>2013/03/03</td>
                <td className="text-center">
                  <span className="label label-danger">Reject</span>
                </td>
                <td>
                  <a href="#">jack@nicholson</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                 
               
                  <span className="user-subhead">Registered</span>
                </td>
                <td>2004/01/24</td>
                <td className="text-center">
                  <span className="label label-warning">Approved</span>
                </td>
                <td>
                  <a href="#">humphrey@bogart.com</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
              <tr>
                <td>
                 
                 
                  <span className="user-subhead">Admin</span>
                </td>
                <td>2013/12/31</td>
                <td className="text-center">
                  <span className="label label-success">Reject</span>
                </td>
                <td>
                  <a href="#">spencer@tracy</a>
                </td>
                <td>
          <a href="#" class="btn btn-success btn-sm">
            <i class="fas fa-trash"></i> Delete
          </a>
        </td>
              </tr>
            </tbody>
          </table>
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
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default Viewcompanyresponse