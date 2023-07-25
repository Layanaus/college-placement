const express = require('express');
const collegeCreateJobModel = require('../models/collegeCreateJobModel')
const mongoose = require('mongoose');
const collegecreatejobRouter = express.Router();
const objectId= mongoose.Types.ObjectId
collegecreatejobRouter.get('/viewjobportal-jobs/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const users = await collegeCreateJobModel.find({company_id:id });

    if (users[0]!=undefined) {
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
        numMatches: 0, // If no data is found, set the count of matches to 0 in the response
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
collegecreatejobRouter.get('/viewjobportal-jobs', async (req, res) => {
  try {
    const users = await collegeCreateJobModel.aggregate([


      {
        '$lookup': {
          'from': 'pofficer_register_tbs',
          'localField': 'login_id',
          'foreignField': 'login_id',
          'as': 'portal'
        }
      },
    
      {
        '$lookup': {
          'from': 'job_category_tbs',
          'localField': 'jobcategory',
          'foreignField': '_id',
          'as': 'chinnu'
        }
      },
      
      {
        '$lookup': {
          'from': 'company_register_tbs',
          'localField': 'company_id',
          'foreignField': 'login_id',
          'as': 'vishnu'
        }
      },
      {
        "$unwind": "$portal"
      },
      {
        "$unwind": "$chinnu"
      },
      {
        "$unwind": "$vishnu"
      },
      {
        "$group": {
          '_id': "$_id",
          'jobname': { "$first": "$jobname" },
          'companylocation': { "$first":"$companylocation" },
          'jobcategory': { "$first":"$jobcategory" },
          'Requiredqualification': { "$first":"$Requiredqualification" },
          'salaryrange': { "$first":"$salaryrange" },
          'jobdescription': { "$first":"$jobdescription" },
          'companycontact': { "$first":"$companycontact" },
          'collegename': { "$first": "$portal.collegename" },
          'companyname': { "$first": "$vishnu.companyname" },
          'jobcategory': { "$first": "$chinnu.jobcategory" },
          'lastdate': { "$first": "$lastdate" },
          'college_id': { "$first": "$portal._id" },
          'company_id': { "$first": "$company_id" },
          'login_id': { "$first": "$login_id" },
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
collegecreatejobRouter.get('/applied_jobs', async (req, res) => {
  try {
    const id=req.params.id;
    const users = await collegeCreateJobModel.aggregate([


      {
        '$lookup': {
          'from': 'company_register_tbs',
          'localField': 'company_id',
          'foreignField': 'login_id',
          'as': 'company'
        }
      },
     
     
      {
        "$unwind": "$company"
      },
//       {
//         $match: { 'jobcategory':new mongoose.Types.ObjectId(id) },
//       },
      
      {
        "$group": {
          '_id': "$_id",
          'login_id': { "$first": "$login_id" },
          'company_id': { "$first": "$company_id" },
          'companylocation': { "$first": "$companylocation" },
          'jobname': { "$first": "$jobname" },
          'jobcategory': { "$first": "$jobcategory" },
          'jobdescription': { "$first": "$jobdescription" },
          'Requiredqualification': { "$first": "$Requiredqualification" },
          'salaryrange': { "$first": "$salaryrange" },
          'companyname': { "$first": "$company.companyname" },
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
collegecreatejobRouter.get('/view-jobportal_description/:id',async(req,res)=>{
  try {
      const id=req.params.id;
      const users = await collegeCreateJobModel.find({_id:id});
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
  collegecreatejobRouter.get('/collegeviewjobs',async(req,res)=>{
    try {
      
        const users = await collegeCreateJobModel.find();
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
collegecreatejobRouter.get('/view-jobportal/:id',async(req,res)=>{
  try {
    const id = req.params.id;
      const users = await collegeCreateJobModel.find({jobcategory:id});
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
  // collegecreatejobRouter.get('/view-portal/:id',async(req,res)=>{
  //   try {
  //    const id=req.params.id;
  //       const users = await collegeCreateJobModel.find({login_id:id});
  //       if(users[0]!=undefined){
  //           return res.status(200).json({
  //               success:true,
  //               error:false,
  //               data:users
  //           })
  //       }else{
  //           return res.status(400).json({
  //               success:false,
  //               error:true,
  //               message:"No data found"
  //           })
  //       }
  //   } catch (error) {
  //       return res.status(400).json({
  //           success:false,
  //           error:true,
  //           message:"Something went wrong",
  //           details:error
  //       })
  //   }
  //   })

  collegecreatejobRouter.get('/view-portal/:id', async (req, res) => {
    try {
      const id=req.params.id;
      const users = await collegeCreateJobModel.aggregate([
  
  
        {
          '$lookup': {
            'from': 'pofficer_register_tbs',
            'localField': 'login_id',
            'foreignField': 'login_id',
            'as': 'portal'
          }
        },
      
        {
          '$lookup': {
            'from': 'job_category_tbs',
            'localField': 'jobcategory',
            'foreignField': '_id',
            'as': 'chinnu'
          }
        },
        
        {
          '$lookup': {
            'from': 'company_register_tbs',
            'localField': 'company_id',
            'foreignField': 'login_id',
            'as': 'vishnu'
          }
        },
        {
          "$unwind": "$portal"
        },
        {
          "$unwind": "$chinnu"
        },
        {
          "$unwind": "$vishnu"
        },
        {
              $match: { 'login_id':new mongoose.Types.ObjectId(id) },
              },
        {
          "$group": {
            '_id': "$_id",
            'jobname': { "$first": "$jobname" },
            'companylocation': { "$first":"$companylocation" },
            'jobcategory': { "$first":"$jobcategory" },
            'Requiredqualification': { "$first":"$Requiredqualification" },
            'salaryrange': { "$first":"$salaryrange" },
            'jobdescription': { "$first":"$jobdescription" },
            'companycontact': { "$first":"$companycontact" },
            'collegename': { "$first": "$portal.collegename" },
            'companyname': { "$first": "$vishnu.companyname" },
            'jobcategory': { "$first": "$chinnu.jobcategory" },
            'lastdate': { "$first": "$lastdate" },
            'college_id': { "$first": "$portal._id" },
            'company_id': { "$first": "$company_id" },
            'login_id': { "$first": "$login_id" },
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
    collegecreatejobRouter.delete('/delete-job/:id', async (req, res) => {
      try {
        const jobId = req.params.id;
    
        // Find the job by ID and delete it
        const deletedJob = await collegeCreateJobModel.findByIdAndDelete(jobId);
    
        if (deletedJob) {
          return res.status(200).json({
            success: true,
            error: false,
            message: "Job deleted successfully"
          });
        } else {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Job not found"
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
    

 
  




collegecreatejobRouter.post('/create_jobportal', async (req, res) => {
  try {
    const data = {
    login_id:req.body.login_id,
    company_id:req.body.company_id,
    companyname:req.body.companyname,
    companylocation:req.body.companylocation,
    jobname:req.body.jobname,
    jobdescription:req.body.jobdescription,
    jobcategory:req.body.jobcategory,
    Requiredqualification:req.body.qualification,
    salaryrange:req.body.salaryrange,
    companycontact:req.body.companycontact,
    lastdate:req.body.lastdate,
    };
    const savedData = await collegeCreateJobModel(data).save();

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

module.exports = collegecreatejobRouter;