import React, { useEffect, useState } from 'react'
import Placementofficernav from './Placementofficernav'
import PublicUserFooter from '../Footer/PublicUserFooter'
import { useParams } from 'react-router-dom'

const Viewcompanyresponse = () => {
  const {id}=useParams()
const college_id=localStorage.getItem('college_id')
console.log(college_id);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 useEffect(() => {
   fetch(`http://localhost:5000/request/view-response/${college_id}`)
     .then((response) => response.json())
     .then((data) => {
       if (data.success) {
         setUsers(data.data);
       }
     })
     .catch((error) => {
       console.error('Error fetching users:', error);
     });
 }, []);
 const usersPerPage = 10;
 const totalPages = Math.ceil(users.length / usersPerPage);

 const handlePageClick = (pageNumber) => {
   setCurrentPage(pageNumber);
 };

 const indexOfLastUser = currentPage * usersPerPage;
 const indexOfFirstUser = indexOfLastUser - usersPerPage;
 const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  return (
    <>
    <Placementofficernav/>
    <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="main-box clearfix">
        <div className="table-responsive">
        <table className="table user-list">
<thead>
              <tr>
              <th>
                  
                  <span>Sl No</span>
                </th>
                <th>

                  <span>Company Name</span>
                </th>
                <th>
                  <span>Date</span>
                </th>
                <th className="text-center">
                  <span>Status</span>
                </th>
                <th>
                  <span>Email</span>
                </th>
                <th>
                  <span>Phone</span>
                </th>
                <th><span>Action</span></th>
              </tr>
            </thead>
<tbody>
  {currentUsers.length > 0 ? (
    currentUsers.map((user, index) => (
      <tr key={user._id}>
        <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
        <td>{user.companyname}</td>
        <td>{user.date}</td>
       
        <td>{user.status}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
        <button className="btn btn-danger danger-button">Delete</button>
        </td>
        
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No users found
              </td>
            </tr>
          )}          </tbody>
</table>
        </div>
        <div className="row justify-content-center">
    <nav aria-label="Page navigation justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
      </div>
    </div>
  </div>
</div>
<PublicUserFooter/>
</>
  )
}

export default Viewcompanyresponse