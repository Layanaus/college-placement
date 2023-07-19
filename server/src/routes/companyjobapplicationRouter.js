const express = require('express');
const companyJobApplicationModel = require('../models/companyJobApplicationModel');




const companyjobapplicationRouter = express.Router();

companyjobapplicationRouter.get('/view-companyapplication',async(req,res)=>{
  try {
      const users = await companyJobApplicationModel.find()
      if(users[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:users
          })
      }else{
          return res.status(400).json({
              success:false,
              error:true,
              message:"No data found"
          })
      }
  } catch (error) {
      return res.status(400).json({
          success:false,
          error:true,
          message:"Something went wrong",
          details:error
      })
  }
  })

  companyjobapplicationRouter.get('/view-applicants', async (req, res) => {
    try {
      const users = await companyJobApplicationModel.aggregate([
          
        {
          '$lookup': {
            'from': 'job_register_tbs', 
            'localField': 'company_id', 
            'foreignField': 'login_id', 
            'as': 'job'
          }
        },
          {
            '$lookup': {
              'from': 'company_register_tbs', 
              'localField': 'company_id', 
              'foreignField': 'login_id', 
              'as': 'company'
            }
        },
        
        {
          "$unwind": "$job"
        },
        {
          "$unwind": "$company"
        },
        
        {
          "$group": {
            '_id': "$_id",
            'login_id': { "$first":"$login_id" },
            'firstname': { "$first":"$name" },
            'jobname': { "$first": "$job.jobname" },
            'date': { "$first": "$date" },
            'companyname': { "$first": "$company.companyname" },
            'company_id': { "$first": "$company.login_id" },
            'application_status': { "$first": "$application_status" },
            
            
          }
        }
      ])
      if (users[0] != undefined) {
        return res.status(200).json({
          success: true,
          error: false,
          data: users
        })
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          message: "No data found"
        })
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong",
        details: error
      })
    }
  })
  
companyjobapplicationRouter.post('/job_application', async (req, res) => {
  try {
    const data = {
    login_id:req.body.login_id,
    company_id:req.body.company_id,
    job_id:req.body.job_id,
    date: new Date().toISOString(), 
    name:req.body.name,
    dateofbirth:req.body.dateofbirth,
    address:req.body.address,
    phonenumber:req.body.phonenumber,
    emailaddress:req.body.emailaddress,
    education:req.body.education,
    skills:req.body.skills,
    aboutyourself:req.body.aboutyourself,
    application_status:'Applied',
    };
    const savedData = await companyJobApplicationModel(data).save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Registration completed",
        details: savedData
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});



module.exports = companyjobapplicationRouter;