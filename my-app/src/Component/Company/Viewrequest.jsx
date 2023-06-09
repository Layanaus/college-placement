import React from 'react'
import PublicUserFooter from '../Footer/PublicUserFooter'
import Companynav from './Companynav'

const Viewrequest = () => {
  return (

    <>
    <Companynav/>
    <div className="container">
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Royal engineering college</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
          <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  {/* end list 1 */}
  {/* list 2 */}
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">MES kttippuram</h5>
      <small className="text-muted">11 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  {/* end list 2 */}
  {/* list 3 */}
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">CCSIT Manjery</h5>
      <small className="text-muted">7 days ago</small>
    </div>
    <div className="d-flex w-100 justify-content-between">
      <p className="mb-1">Subject of Letter</p>
      <div>
        <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-primary mr-5" onclick="redirectToPage()">
            Accept
          </button>
          <button className="btn btn-danger mr-5" onclick="redirectToPage()">
            Reject
          </button>
        </div>
      </div>
    </div>
  </a>
  {/* end list  */}
</div>
<PublicUserFooter/>
</>


  )
}

export default Viewrequest