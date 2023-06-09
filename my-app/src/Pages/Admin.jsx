import React from 'react'
import AdminNav from '../Component/Admin/AdminNav'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import Commonheader from '../Component/Commonheader'



const Admin = () => {
  return (
    <div>
        <AdminNav/>
        <Commonheader/>
        <PublicUserFooter/>
     
    </div>
  )
}

export default Admin