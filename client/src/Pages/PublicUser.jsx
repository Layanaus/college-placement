import React from 'react'
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import PublicSlider from '../Component/Public/PublicSlider'
import PublicUserTop from '../Component/Topbar/PublicUserTop'
import PublicUserContact from './PublicUserContact'

const PublicUser = () => {
  return (
    <div>
        <PublicUserTop/>
        <PublicUserNav/>
        <PublicSlider/>
        <PublicUserFooter/>
        
      

    </div>
  )
}

export default PublicUser