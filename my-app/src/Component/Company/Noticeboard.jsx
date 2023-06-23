import React from 'react'
import Companynav from './Companynav'
import PublicUserFooter from '../Footer/PublicUserFooter'

const Noticeboard = () => {
  return (
    <>
    <Companynav/>
    <div className='container'>
    <table className="table" style={{ borderRadius: 15 }}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">College</th>
          
    
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Layana</td>
          <td>Address1</td>
          <td>PPTMYHSS Arts and science</td>
         
         
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Shamliya</td>
          <td>Address1</td>
          <td>CCSIT Kuttippuram</td>      
        
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Shana</td>
          <td>Address1</td>
          <td>MES Kuttippuram</td>
       
          
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jacob</td>
          <td>Address1</td>
          <td>University Campus</td>
   
        </tr>
        <tr>
          </tr>
      </tbody>
    </table>
    </div>
    <PublicUserFooter/>
    </>
    
  )
}

export default Noticeboard