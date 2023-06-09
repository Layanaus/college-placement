import React from 'react'
import Usernav from '../Component/User/Usernav'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import UserBody from '../Component/User/UserBody'

import ViewPlacementstudent from '../Component/User/ViewPlacementstudent'

const User = () => {
  return (
    <>
    <Usernav/>
    <UserBody/>
    <ViewPlacementstudent/>
    <PublicUserFooter/>
    </>
  )
}

export default User