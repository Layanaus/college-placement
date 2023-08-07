const express = require('express');
const companyNotifyInterviewModel = require('../models/companyNotifyInterviewModel');
const { default: mongoose } = require('mongoose');

const objectId= mongoose.Types.ObjectId



const companynotifyinterviewRouter = express.Router();


companynotifyinterviewRouter.get('/view-notify-interview', async (req, res) => {
  try {
    

    const users = await companyNotifyInterviewModel.aggregate([
      {
        '$lookup': {
          'from': 'company_register_tbs',
          'localField': 'login_id',
          'foreignField': 'login_id',
          'as': 'company'
        }
      },
      {
        '$lookup': {
          'from': 'job_register_tbs',
          'localField': 'job_id',
          'foreignField': '_id',
          'as': 'job'
        }
      },
      // {
      //   '$lookup': {
      //     'from': 'jobapplication_register_tbs',
      //     'localField': 'job_id',
      //     'foreignField': '_id',
      //     'as': 'data'
      //   }
      // },
      {
        "$unwind": "$company"
      },
      {
        "$unwind": "$job"
      },
      // {
      //   "$unwind": "$data"
      // },
      {
        "$group": {
          '_id': "$_id",
          'message': { "$first": "$message" },
          'jobname': { "$first": "$job.jobname" },
          'companyname': { "$first": "$company.companyname" },
          'companylocation': { "$first": "$company.companylocation" },
          'date': { "$first": "$date" },
          'application_status': { "$first": "$data.application_status" },
          'application_id': { "$first": "$data._id" },
          'user_id': { "$first": "$data.login_id" },
          'login_id': { "$first": "$login_id" },
          'job_id': { "$first": "$job_id" },
        }
      }
    ]);

    if (users[0] !== undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
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
companynotifyinterviewRouter.get('/view-notified-interview', async (req, res) => {
  const id = req.query.login_id;
  try {
  

    const users = await companyNotifyInterviewModel.aggregate([
      // {
      //   '$lookup': {
      //     'from': 'company_register_tbs',
      //     'localField': 'login_id',
      //     'foreignField': 'login_id',
      //     'as': 'company'
      //   }
      // },
      // {
      //   '$lookup': {
      //     'from': 'job_register_tbs',
      //     'localField': 'login_id',
      //     'foreignField': 'login_id',
      //     'as': 'job'
      //   }
      // },
      {
        '$lookup': {
          'from': 'jobapplication_register_tbs',
          'localField':'job_id',
          'foreignField':'job_id',
          'as': 'data'
        }
      },
      {
        '$lookup': {
          'from': 'company_register_tbs',
          'localField':'login_id',
          'foreignField':'login_id',
          'as': 'company'
        }
      },
      // {
      //   "$unwind": "$company"
      // },
      // {
      //   "$unwind": "$job"
      // },
      {
        "$unwind": "$data"
      },
      {
        "$unwind": "$company"
      },

      // {
      //   "$group": {
      //     '_id': "$_id",
      //     'message': { "$first": "$message" },
      //     'application_status': { "$first": "$data.application_status" },
      //   }
      // }
    ]);

    if (users[0] !== undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
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
companynotifyinterviewRouter.get('/view-sanitha-interview', async (req, res) => {
  const id = req.query.login_id;
  try {
  

    const users = await companyNotifyInterviewModel.aggregate([
      // {
      //   '$lookup': {
      //     'from': 'company_register_tbs',
      //     'localField': 'login_id',
      //     'foreignField': 'login_id',
      //     'as': 'company'
      //   }
      // },
      // {
      //   '$lookup': {
      //     'from': 'job_register_tbs',
      //     'localField': 'login_id',
      //     'foreignField': 'login_id',
      //     'as': 'job'
      //   }
      // },
      {
        '$lookup': {
          'from': 'jobsapplication_register_tbs',
          'localField':'job_id',
          'foreignField':'job_id',
          'as': 'data'
        }
      },
      {
        '$lookup': {
          'from': 'company_register_tbs',
          'localField':'login_id',
          'foreignField':'login_id',
          'as': 'company'
        }
      },
      // {
      //   "$unwind": "$company"
      // },
      // {
      //   "$unwind": "$job"
      // },
      {
        "$unwind": "$data"
      },
      {
        "$unwind": "$company"
      },

      // {
      //   "$group": {
      //     '_id': "$_id",
      //     'message': { "$first": "$message" },
      //     'application_status': { "$first": "$data.application_status" },
      //   }
      // }
    ]);

    if (users[0] !== undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
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
companynotifyinterviewRouter.get('/view-interview',async(req,res)=>{
  try {
      const interview = await companyNotifyInterviewModel.find()
      if(interview[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:interview
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






  companynotifyinterviewRouter.post('/create_interview', async (req, res) => {
  try {
    const data = {
      login_id:req.body. login_id,
      job_id:req.body.job_id,
      job_application_id:req.body.job_application_id,
      message:req.body.message,
      date:req.body.interviewdate,
   
    };
       const savedData = await companyNotifyInterviewModel(data).save();

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

module.exports = companynotifyinterviewRouter;