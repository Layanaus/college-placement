// // import React from 'react'

// // const UserBody = () => {
// //   return (
// //     <div
// //   className="jumbotron2 jumbotron2-fluid position-relative overlay-bottom"
// //   style={{ marginTop:'-50px' }}
// // >
//   {/* <div className="container text-center my-5 py-5">
//     <h1 className="text-white mt-4 mb-4">Job Search Made Easy: Discover, Apply, Succeed</h1>
//     <h1 className="text-white display-1 mb-5">Your Future Starts Here</h1>
//     <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: 600 }}>
//       <div className="wrapper fadeInDown">
//         <div id="formContent"> */}
//           {/* Tabs Titles
//           Icon */}
//           {/* <div className="fadeIn first">
//             <div style={{ fontWeight: "bold", fontSize: 26, marginTop: 30 }}>
//               Login
//             </div>
//           </div> */}
//           {/* Login Form */}
//           {/* <form>

//             <input
//               type="text"
//               id="login"
//               className="fadeIn second"
//               name="login"
//               placeholder="Username"
//             />
//             <input
//               type="text"
//               id="password"
//               className="fadeIn third"
//               name="login"
//               placeholder="password"
//             /> */}
      

//             {/* <select className="fadeIn third" aria-label="Default select example">
//              <option value={1} className="selectedx">Student</option>
//             <option value={2}>Admin</option>
//             <option value={3}>Company</option>
//             <option value={3}>College</option>
//            </select> */}
//             {/* <input
//               type="submit"
//               className="fadeIn fourth"
//               defaultValue="Log In"
//             />
//           </form> */}
//          {/* Remind Passowrd */}
//           {/* <div id="formFooter">
//             <a className="underlineHover" href="#">
//               Forgot Password?
//             </a>
//           </div>  */}
//         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>

// //   )
// // }

// // export default UserBody
import React from 'react'
import Usernav from './Usernav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const UserBody = () => {
  return (
    <>
    <Usernav/>
    <div
  className="jumbotron jumbotron-fluid position-relative overlay-bottom"
  style={{ marginBottom: 90 }}
>
  
  <div className="container text-center my-5 py-5">
    <h1 className="text-white mt-4 mb-4">Welcome To Your</h1>
    <h1 className="text-white display-1 mb-5">Career Stepping Stone</h1>
    <div className="mx-auto mb-5" style={{ width: "100%", maxWidth: 600 }}>
      <div className="input-group">
        <div className="input-group-prepend">
          {/* <button class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Courses</button> */}
          <div className="dropdown-menu">
            {/* <a class="dropdown-item" href="#">Courses 1</a>
                      <a class="dropdown-item" href="#">Courses 2</a>
                      <a class="dropdown-item" href="#">Courses 3</a> */}
          </div>
        </div>
        {/* <input type="text" class="form-control border-light" style="padding: 30px 25px;" placeholder="Keyword"> */}
        <div className="input-group-append">
          {/* <button class="btn btn-secondary px-4 px-lg-5">Search</button> */}
        </div>
      </div>
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default UserBody