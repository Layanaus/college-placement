import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter'
import Placementofficernav from './Placementofficernav'

const StudentManage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 useEffect(() => {
   fetch('http://localhost:5000/register/view-users')
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
    <div className="col-lg-10 offset-md-1">
      <div className="card panel-table">
        <div className="card-header" style={{textAlign:"center",}}>
          <h2 >Manage Student</h2>
          <div className="row" />
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered table-list">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mob No</th>
                <th>
                 Action
                </th>
              </tr>
            </thead>
            <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <tr key={user._id}>
                  <th scope="row">{(currentPage - 1) * usersPerPage + index + 1}</th>
                  <td>{user.firstname}</td>
                  <td>{user.choosecollege}</td>
                  <td>{user.regno}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  
                  
           <td align="center">
  <a className="btn btn-success" style={{marginRight:'5px'}}>
    <em className="fa fa-check" />
  </a>
  <a className="btn btn-danger">
    <em className="fa fa-times" />
  </a>
</td>


</tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="row justify-content-center" style={{marginTop:'30px'}}>
  <nav aria-label="Page navigation justify-content-center">
  <ul className="pagination">
    <li className="page-item">
      <a
        className="page-link"
        href="#"
        aria-label="Previous"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span aria-hidden="true">«</span>
      </a>
    </li>
    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
      <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
        <a className="page-link" href="#" onClick={() => handlePageClick(page)}>
          {page}
        </a>
      </li>
    ))}
    <li className="page-item">
      <a
        className="page-link"
        href="#"
        aria-label="Next"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span aria-hidden="true">»</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>

<PublicUserFooter/>
    </>
  )
}

export default StudentManage