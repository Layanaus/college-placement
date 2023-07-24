const express = require('express');
const companyJobApplicationModel = require('../models/companyJobApplicationModel');
const { default: mongoose } = require('mongoose');
const userProfileModel = require('../models/userProfileModel');

const objectId= mongoose.Types.ObjectId



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
  companyjobapplicationRouter.get('/view-applicants/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const wishlistItems = await companyJobApplicationModel.find({_id:id});
      if (wishlistItems.length > 0) {
        return res.status(200).json({
          success: true,
          error: false,
          data: wishlistItems,
        });
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          message: 'No items found in wishlist',
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
  


 companyjobapplicationRouter.get('/view-userpr', async (req, res) => {
  try {
    const id = req.params.id;

    const users = await companyJobApplicationModel.aggregate([
     
      {
        '$lookup': {
          'from':'user_profile_tbs', 
          'localField': 'login_id', 
          'foreignField': 'login_id', 
          'as': 'job'
        }
      },
      {
        "$unwind": "$job"
      },
//       {
//         $match: { 'login_id':new mongoose.Types.ObjectId(id) },
//       },
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first":"$name" },
          'dateofbirth': {"$first":"$dateofbirth" },
          'address': { "$first":"$address" },
          'phonenumber': {"$first":"$phonenumber" },
          'emailaddress': { "$first":"$emailaddress" },
          'education': { "$first":"$education" },
          'skills': { "$first":"$skills" },
          'aboutyourself': {"$first":"$aboutyourself" },
          'cv': {"$first":"$job.cv" },
          'login_id': { "$first":"$job.login._id" },
        }
      }
    ]);
    

    if (users.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: users
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: "User profile not found for the provided login ID."
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error
    });
  }
});
companyjobapplicationRouter.get('interview_status', async (req, res) => {
  try {
   
    const users = await companyJobApplicationModel.aggregate([


      {
        '$lookup': {
          'from': 'job_register_tbs',
          'localField': 'job_id',
          'foreignField': '_id',
          'as': 'status'
        }
      },
      {
        "$unwind": "status"
      },
      // {
      //   "$group": {
      //     '_id': "$_id",
      //     'companyname': { "$first": "$company.companyname" },
      //     'company_id': { "$first": "$company.login_id" },
      //     'companylocation': { "$first": "$company.companylocation" },
      //     'jobname': { "$first": "$jobname" },
      //     'jobdescription': { "$first": "$jobdescription" },
      //     'jobcategory': { "$first": "$jobcategory" },  
      //     'vaccancy': { "$first": "$vaccancy" },
      //     'qualification': { "$first": "$qualification" },
      //     'expectedsalary': { "$first": "$expectedsalary" },
      //     'lastdate': { "$first": "$lastdate" },
      //     'login_id': { "$first": "$login._id" },
      //   }
      // }
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
companyjobapplicationRouter.get('/view-chinnu/:id', async (req, res) => {
  try {
    const id=req.params.id;
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
        "$unwind": "$job"
      },
      {
        $match: { 'job_id':new mongoose.Types.ObjectId(id) },
      },  
      {
        "$group": {
          '_id': "$_id",
          'login_id': { "$first":"$login_id" },
          'job_id': { "$first":"$job_id" },
          'name': { "$first":"$name" },
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
  
  companyjobapplicationRouter.get('/view-applicants', async (req, res) => {
    try {
      
      const users = await companyJobApplicationModel.aggregate([
          
        {
          '$lookup': {
            'from': 'job_register_tbs', 
            'localField': 'job_id', 
            'foreignField': '_id', 
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
            'job_id': { "$first": "$job._id" },
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

companyjobapplicationRouter.put('/update_status/:id', async (req, res) => {
  try {
    const id = req.params.id; 
    const newStatus = req.body.application_status;

    const updatedApplication = await companyJobApplicationModel.findByIdAndUpdate(
      id, 
      { $set: { application_status: newStatus } },
      { new: true }
    );

    if (updatedApplication) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Application status updated successfully",
        details: updatedApplication,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Application not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error,
    });
  }
});




companyjobapplicationRouter.get('/update_appstatus/:id', async (req, res) => {
  try {
    const login_id = req.params.id;

    const updatedData = {
      
      application_status: 'Test Completed',
    };

    const updatedApplication = await companyJobApplicationModel.updateOne({login_id:login_id}, {$set:updatedData});

    if (updatedApplication) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Application status updated successfully",
        details: updatedApplication,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Application not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error,
    });
  }
});

module.exports = companyjobapplicationRouter;