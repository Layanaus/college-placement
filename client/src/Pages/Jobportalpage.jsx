import React from 'react'
import Placementofficernav from '../Component/PlacementOfficer/Placementofficernav'
import Commonheader from '../Component/Commonheader'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import JobPortal from '../Component/PlacementOffcrFunctionality/JobPortal'

const Jobportalpage = () => {
  return (
    <div>
        <Placementofficernav/>
        <JobPortal/>
        <PublicUserFooter/>
    </div>
    
  )
}

export default Jobportalpage