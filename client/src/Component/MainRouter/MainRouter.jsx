import React from 'react'
import PublicUser from '../../Pages/PublicUser'
import { Route,Routes } from 'react-router-dom'
import PublicUserContact from '../../Pages/PublicUserContact'
import PublicUserAbout from '../../Pages/PublicUserAbout'

import CmpReg from '../Registration/CmpReg'
import PlacementOfficerReg from '../Registration/PlacementOfficerReg'
import UserReg from '../Registration/UserReg'
import Admin from '../../Pages/Admin'
import Company from '../../Pages/Company'
import Placementofficer from '../../Pages/Placementofficer'
import User from '../../Pages/User'
import Jobportalpage from '../../Pages/Jobportalpage'
import Jobopeningpage from '../../Pages/Jobopeningpage'
import Manageuser from '../Admin/Manageuser'
import ManageCompany from '../Admin/ManageCompany'
import ManageCollege from '../Admin/ManageCollege'
import AdchangePwd from '../../Pages/Admin/AdchangePwd'
import Pchangepwd from '../../Pages/PlacementOfficer/Pchangepwd'
import StudentManage from '../PlacementOfficer/StudentManage'
import Sendplacementrequest from '../PlacementOfficer/Sendplacementrequest'
import CreateJobportal from '../PlacementOfficer/CreateJobportal'
import Userchangepassword from '../../Pages/User/Userchangepassword'
import MyProfile from '../User/MyProfile'
import Jobdetails from '../User/Jobdetails'
import Usernotification from '../User/Usernotification'
import Viewrequest from '../Company/Viewrequest'
import Editcompanyprofile from '../Company/Editcompanyprofile'
import Cmpchangepwd from '../../Pages/Company/Cmpchangepwd'
import UserBody from '../User/UserBody'

import ViewPlacementstudent from '../User/ViewPlacementstudent'
import InterviewStatus from '../User/InterviewStatus'
import CreateJob from '../Company/CreateJob'
import Applications from '../Company/Applications'
import NotifyInterview from '../Company/NotifyInterview'
import ReviewApplication from '../Company/ReviewApplication'
import ViewJobs from '../User/ViewJobs'
import Placementofficerviewjobs from '../PlacementOfficer/Placementofficerviewjobs'
import POsearchvacancy from '../PlacementOfficer/POsearchvacancy'
import SearchVacancy from '../User/SearchVacancy'
import POjobdetails from '../PlacementOfficer/POjobdetails'
import Adviewjobs from '../Admin/AdviewJobs'
import Adsearchvacancy from '../Admin/Adsearchvacancy'
import Adviewjobdeatils from '../Admin/Adviewjobdeatils'
import ViewJobcategory from '../User/ViewJobcategory'
import UJobportalhome from '../../Pages/User/UJobportalhome'
import Applyjobs from '../User/Applyjobs'
import Jobportaljobdetails from '../User/Jobportaljobdetails'
import Applyjobportal from '../User/Applyjobportal'
import Viewcompanyresponse from '../PlacementOfficer/Viewcompanyresponse'
import Adviewjobportal from '../Admin/Adviewjobportal'
import Createplacedstudent from '../PlacementOfficer/Createplacedstudent'
import Aptitudetest from '../Company/Aptitudetest'
import Appliedjobs from '../../Pages/User/Appliedjobs'
import ViewAppliedstudents from '../PlacementOfficer/ViewAppliedstudents'
import Colleges from '../Company/Colleges'
import Viewrequests from '../PlacementOfficer/Viewrequests'
import ManageJobportal from '../PlacementOfficer/ManageJobportal'
import Testresult from '../Company/Testresult'
import Viewjob from '../Company/Viewjob'
import Questions from '../Company/Questions'
import Noticeboard from '../Company/Noticeboard'
import JobPortalviewstudents from '../PlacementOfficer/JobPortalviewstudents'
import MovingHeadings from '../User/Test'
import Createcategory from '../Admin/Createcategory'
import PublicContact from '../Public/PublicContact'
import ManageContactus from '../Admin/ManageContactus'
import Editcreatejob from '../Company/Editcreatejob'
import Editjobportal from '../PlacementOfficer/Editjobportal'
import CollegeExamtest from '../User/collegeExamtest'
const MainRouter = () => {
  return (
    
        <Routes>
            <Route path="/" element={<PublicUser/>}/>
            <Route path="contact" element={<PublicContact/>}/>
            <Route path="home" element={<PublicUser/>}/>
            <Route path='PublicUser' eleFment={<PublicUserAbout/>}/>
            <Route path="PublicUserContact" element={<PublicUserContact/>}/>
            <Route path="PublicUserAbout" element={<PublicUserAbout/>}/>
            <Route path="UserReg" element={<UserReg/>}/>
            <Route path="CompanyReg" element={<CmpReg/>}/>
            <Route path="placementReg" element={< PlacementOfficerReg/>}/>
            <Route path="Admin" element={< Admin/>}/>
            <Route path="Company" element={< Company/>}/>
            <Route path="Placementofficer" element={< Placementofficer/>}/>        
            <Route path="Jobportal" element={< Jobportalpage/>}/>
            <Route path="Jobopening" element={< Jobopeningpage/>}/>
            <Route path="Jobdetails/:id/:company_id" element={< Jobdetails/>}/>
            <Route path="manageuser" element={<Manageuser/>}/>
            <Route path="managecompany" element={<ManageCompany/>}/>
            <Route path="managecollege" element={<ManageCollege/>}/>
            <Route path="changepassword" element={<AdchangePwd/>}/>
            <Route path="Placementchange" element={<Pchangepwd/>}/>
            <Route path="studentmanage" element={<StudentManage/>}/>
            <Route path="sendrequest" element={<Sendplacementrequest/>}/>
            <Route path="Pjobportal" element={<CreateJobportal/>}/>
            <Route path="Uchangepassword" element={<Userchangepassword/>}/>
            <Route path="UserProfile" element={<MyProfile/>}/>
            <Route path="user" element={<ViewJobs/>}/>
            <Route path="Usernotification" element={<Usernotification/>}/>
            <Route path="Viewrequest" element={<Viewrequest/>}/>
            <Route path="Editcompanyprofile" element={<Editcompanyprofile/>}/>
            <Route path="Cmpchangepwd" element={<Cmpchangepwd/>}/>
            <Route path="userbody" element={<UserBody/>}/>
            <Route path="ViewPlacementstudent" element={<ViewPlacementstudent/>}/>
            <Route path="Viewinterviewstatus" element={<InterviewStatus/>}/>
            <Route path="Createjob" element={<CreateJob/>}/>
            <Route path="Application/:id/:type" element={<Applications/>}/>
            <Route path="Notifyinterview/:id" element={<NotifyInterview/>}/>
            <Route path="Reviewapplication/:id/:cid/:jid/:type" element={<ReviewApplication/>}/>
            <Route path="POviewjobs" element={<Placementofficerviewjobs/>}/>
            <Route path="POsearchvacancy2" element={<POsearchvacancy/>}/>
            <Route path="searchvacancy/:id" element={<SearchVacancy/>}/>
            <Route path="Pojobdetails/:id" element={<POjobdetails/>}/>
            <Route path="adminviewjobs" element={<Adviewjobs/>}/>
            <Route path="adsearchjob/:id" element={<Adsearchvacancy/>}/>
            <Route path="adminjobdetails/:id" element={<Adviewjobdeatils/>}/>
            <Route path="viewjobcategory" element={<ViewJobcategory/>}/>
            <Route path="jobportalhome" element={<UJobportalhome/>}/>
            <Route path="applyjobs/:id" element={<Applyjobs/>}/>
            <Route path="/PJobdetails/:id" element={<Jobportaljobdetails/>}/>
            <Route path="applyjobportal/:id/:c_id" element={<Applyjobportal/>}/>
            <Route path="companyresponse" element={<Viewcompanyresponse/>}/>
            <Route path="adviewjobportal" element={<Adviewjobportal/>}/>
            <Route path="placedstudent" element={<Createplacedstudent/>}/>
            <Route path="aptitudetst/:id/:c_id/:j_id" element={<Aptitudetest/>}/>
            <Route path="appliedjobs" element={<Appliedjobs/>}/>
            <Route path="viewstudents" element={<ViewAppliedstudents/>}/>
            <Route path="companycolleges" element={<Colleges/>}/>
            <Route path="viewrequests" element={<Viewrequests/>}/>
            <Route path="manageportal" element={<ManageJobportal/>}/>
            <Route path="testresult" element={<Testresult/>}/>
            <Route path="viewjob" element={<Viewjob/>}/>
            <Route path="testresult" element={<Testresult/>}/>
            <Route path="questions" element={<Questions/>}/>
            <Route path="noticeboard/:id" element={<Noticeboard/>}/>
            <Route path="jobportalviewstudents/:id" element={<JobPortalviewstudents/>}/>
          
            <Route path="category" element={<Createcategory/>}/>
            <Route path="contactus" element={<ManageContactus/>}/>

            <Route path="editcreatejob/:id" element={<Editcreatejob/>}/>
            <Route path="editjobportal/:id" element={<Editjobportal/>}/>
            <Route path="collegeaptitudetst/:id/:c_id/:j_id" element={<CollegeExamtest/>}/>


        


          

































            







        
        </Routes>
 
  )
}

export default MainRouter