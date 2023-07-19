const express = require('express');
const companyCreateJobModel = require('../models/companyCreateJobModel');


const companycreatejobRouter = express.Router();

companycreatejobRouter.get('/view-jobs/:id', async (req, res) => {
  try {
  const id=req.params.id;
    const users = await companyCreateJobModel.find({login_id:id});
    if (users[0] !== undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found',
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


companycreatejobRouter.get('/view-companyjobs/:id',async(req,res)=>{
  try {
      const id=req.params.id;
      const users = await companyCreateJobModel.find({jobcategory:id});
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
  companycreatejobRouter.get('/view-jobdescription/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const users = await companyCreateJobModel.find({_id:id});
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


companycreatejobRouter.post('/create_job', async (req, res) => {
  try {
    const data = {
    login_id: req.body.login_id,
    companyname:req.body.companyname,
    companylocation:req.body.companylocation,
    jobname:req.body.jobname,
    jobdescription:req.body.jobdescription,
    jobcategory:req.body.jobcategory,
    vaccancy:req.body.vaccancy,
    qualification:req.body.qualification,
    expectedsalary:req.body.expectedsalary,
    branch:req.body.branch,
    lastdate:req.body.lastdate,
    };
    const savedData = await companyCreateJobModel(data).save();

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


companycreatejobRouter.get('/view-vaccancy', async (req, res) => {
  try {
   
    const users = await companyCreateJobModel.aggregate([


      {
        '$lookup': {
          'from': 'company_register_tbs',
          'localField': 'login_id',
          'foreignField': 'login_id',
          'as': 'company'
        }
      },
      {
        "$unwind": "$company"
      },
      {
        "$group": {
          '_id': "$_id",
          'companyname': { "$first": "$company.companyname" },
          'companylocation': { "$first": "$company.companylocation" },
          'jobname': { "$first": "$jobname" },
          'jobdescription': { "$first": "$jobdescription" },
          'jobcategory': { "$first": "$jobcategory" },  
          'vaccancy': { "$first": "$vaccancy" },
          'qualification': { "$first": "$qualification" },
          'expectedsalary': { "$first": "$expectedsalary" },
          'lastdate': { "$first": "$lastdate" },
          'login_id': { "$first": "$login._id" },
        }
      }
    ])
  
   
    if (users[0] !== undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found',
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


module.exports = companycreatejobRouter;