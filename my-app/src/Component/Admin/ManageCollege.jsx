import React from 'react'
import AdminNav from './AdminNav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const  ManageCollege = () => {
  return (
    <>
    <AdminNav/>
    <div className="container-fluid">
  <div className="row">
    <div className="col-lg-10 offset-md-1">
      <div className="card panel-table">
        <div className="card-header" style={{textAlign:"center",}}>
          <h2 >Manage College</h2>
          <div className="row" />
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered table-list">
            <thead>
              <tr>
                <th>ID</th>
                <th>College Name</th>
                <th>College Address</th>
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
</div>
<PublicUserFooter/>
    </>
  )
}

export default ManageCollege