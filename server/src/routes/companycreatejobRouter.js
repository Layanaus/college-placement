const express = require('express');
const companyCreateJobModel = require('../models/companyCreateJobModel');
const companyJobApplicationModel = require('../models/companyJobApplicationModel');
const collegeCreateJobModel = require('../models/collegeCreateJobModel');


const companycreatejobRouter = express.Router();
companycreatejobRouter.get('/view-jobs/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const users = await companyCreateJobModel.find({ login_id: id });

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
        numMatches: 0, 
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
    const existingJob = await companyCreateJobModel.findOne({
      jobname: req.body.jobname,
      companyname: req.body.companyname,
      companylocation: req.body.companylocation,
    });

    if (existingJob) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Job with the same name and details already exists",
        details: existingJob,
      });
    }
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
    date:new Date(),
    lastdate:req.body.lastdate,
    status:'Applications Recieving..',
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
companycreatejobRouter.put('/edit-job/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = {
      jobname: req.body.jobname,
      jobdescription: req.body.jobdescription,
      jobcategory: req.body.jobcategory,
      vaccancy: req.body.vaccancy,
      qualification: req.body.qualification,
      expectedsalary: req.body.expectedsalary,
      branch: req.body.branch,
      date: new Date(),
      lastdate: req.body.lastdate,
      status: 'Applications Receiving..',
    };

    const updatedJob = await companyCreateJobModel.findByIdAndUpdate(id, updatedData, {
      new: true, 
    });

    if (updatedJob) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Job updated successfully',
        data: updatedJob,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Job not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

companycreatejobRouter.delete('/job/:id', async (req, res) => {
  try {
    const jobId = req.params.id;

    const existingJob = await companyCreateJobModel.findById(jobId);

    if (!existingJob) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Job not found",
        details: null
      });
    }

    await companyCreateJobModel.findByIdAndRemove(jobId);

    return res.status(200).json({
      success: true,
      error: false,
      message: "Job deleted successfully",
      details: existingJob
    });
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
          'company_id': { "$first": "$company.login_id" },
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




companycreatejobRouter.get('/get-applications/:cid', async (req, res) => {
  try {
    const cid = req.params.cid;
    const applicationsCount = await companyJobApplicationModel.countDocuments({ job_id: cid });

    if (applicationsCount > 0) {
      return res.status(200).json({
        success: true,
        message: 'Data found',
        numMatches: applicationsCount,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'No data found',
        numMatches: 0,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});


companycreatejobRouter.put('/edit-openedjob/:id', async (req, res) => {
  try {
    const job_id = req.params.id;
    const updatedData = {
      jobname: req.body.jobname,
    jobdescription: req.body.jobdescription,
    jobcategory: req.body.jobcategory,
    vaccancy: req.body.vaccancy,
    qualification: req.body.qualification,
    expectedsalary: req.body.expectedsalary,
    lastdate: req.body.lastdate,

    };

    const updatedjob = await companyCreateJobModel.updateOne({_id:job_id}, {$set:updatedData});

    if (updatedjob) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'job updated successfully',
        data: updatedmyprofile,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'job not found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
     }
      });




companycreatejobRouter.get('/view-openedjobdetails/:id', async (req, res) => {
  try {
  
    const id=req.params.id;
    const student = await companyCreateJobModel.findOne({_id:id}); 

    if (student) {
      return res.status(200).json({
        success: true,
        error: false,
        data: student
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
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




companycreatejobRouter.get('/view-openedjobportaldetails/:id', async (req, res) => {
  try {
  
    const id=req.params.id;
    const student = await collegeCreateJobModel.findOne({_id:id}); 

    if (student) {
      return res.status(200).json({
        success: true,
        error: false,
        data: student
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "No data found"
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
module.exports = companycreatejobRouter;