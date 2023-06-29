import React from 'react'
import Placementofficernav from '../Component/PlacementOfficer/Placementofficernav'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'

const Placementofficer = () => {
  return (
    <>
    <Placementofficernav/>
    <div
  className="jumbotron jumbotron-fluid position-relative overlay-bottom"
  style={{ marginBottom: 90 }}
>
  <div className="container text-center my-5 py-5">
    <h1 className="text-white mt-4 mb-4">Welcome To Our</h1>
    <h1 className="text-white display-1 mb-5">Companies</h1>
    <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: 600 }}>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles
          Icon */}
          </div>
      </div>
    </div>
  </div>
</div>
    <PublicUserFooter/>
    </>
  )
}

export default Placementofficer