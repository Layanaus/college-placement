import React from 'react'
import PublicAbout from '../Component/Public/PublicAbout'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import PublicUserTop from '../Component/Topbar/PublicUserTop'


const PublicUserAbout = () => {
  return (
    <div>
        <PublicUserTop/>
        <PublicUserNav/>
        <PublicAbout/>
        <PublicUserFooter/>
    </div>
  )
}

export default PublicUserAbout