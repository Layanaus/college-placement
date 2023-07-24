const express = require('express');
const aptitudetestModel = require('../models/aptitudetestModel');
const companyJobApplicationModel = require('../models/companyJobApplicationModel');




const aptitudetestRouter = express.Router();
aptitudetestRouter.get('/view-aptitude-result', async (req, res) => {
  try {
    const users = await aptitudetestModel.aggregate([


      {
        '$lookup': {
          'from': 'user_register_tbs',
          'localField': 'login_id',
          'foreignField': 'login_id',
          'as': 'result'
        }
      },
      {
        '$lookup': {
          'from': 'job_register_tbs',
          'localField': 'company_id',
          'foreignField': 'login_id',
          'as': 'job'
        }
      },
      {
        "$unwind": "$result"
      },
      {
        "$unwind": "$job"
      },
     
      {
        "$group": {
          '_id': "$_id",
          'marks': { "$first": "$marks" },
          'choosecollege': { "$first": "$college.collegename" },          
          'application_id': { "$first": "$application_id" },
          'totalmarks': { "$first": "$totalmarks" },
          'passed': { "$first": "$passed" },
          'date': { "$first": "$date" },
          'firstname': { "$first":"$result.firstname" },
          'email': { "$first":"$result.email" },
          'phone': { "$first":"$result.phone" },
          'login_id': { "$first":"$login_id" },
          'company_id': { "$first":"$company_id" },
          'jobtype': { "$first":"$job.jobname" },
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
aptitudetestRouter.post('/add-result', async (req, res) => {
  try {
    const id = req.params.id
    const dateString = new Date();
      const date = new Date(dateString);
      const formattedDate = date.toISOString().split('T')[0];
    const data = {
      login_id:req.body.login_id,
      application_id:req.body.application_id,
      company_id:req.body.company_id,
      job_id:req.body.job_id,
      marks:req.body.score, 
      date:formattedDate, 
      totalmarks: req.body.totalMarks, 
      passed: req.body.passed, 
    };
    const savedData = await aptitudetestModel(data).save();
   
    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Registration completed',
        details: savedData,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

module.exports = aptitudetestRouter;



