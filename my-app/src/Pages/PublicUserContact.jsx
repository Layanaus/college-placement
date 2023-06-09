import React from 'react'
import PublicUserNav from '../Component/Navbar/PublicUserNav'
import PublicContact from '../Component/Public/PublicContact'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import PublicSlider from '../Component/Public/PublicSlider'
import PublicUserTop from '../Component/Topbar/PublicUserTop'

const PublicUserContact = () => {
  return (
    <div>
      <PublicUserTop/>
   <PublicUserNav/>
  
   <PublicContact/>


    </div>
  )
}

export default PublicUserContact