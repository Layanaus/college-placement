import React from 'react'
import PublicUserTop from '../Component/Topbar/PublicUserTop'
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import jobs from '../Component/Userfunctionality/jobs'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'

const jobs = () => {
  return (
    <div>
        <PublicUserTop/>
        <PublicUserNav/>
        <jobs/>
        <PublicUserFooter/>
        
    </div>
  )
}

export default jobs