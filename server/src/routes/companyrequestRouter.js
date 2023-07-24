const express = require('express');
const companyRequestModel = require('../models/companyRequestModel');
const { default: mongoose } = require('mongoose');

const objectId= mongoose.Types.ObjectId


const companyrequestRouter = express.Router();

// companyrequestRouter.get('/accept/:id', async (req, res) => {
//   try {
//     const id = req.params.id;

//     const approve = await companyRequestModel.updateOne({ _id: id }, { $set: { status: 1 } });

//     if (approve && approve.modifiedCount === 1) {
//       return res.status(200).json({
//         success: true,
//         message: 'User approved',
//       });
//     } else if (approve && approve.modifiedCount === 0) {
//       return res.status(400).json({
//         success: false,
//         message: 'User not found or already approved',
//       });
//     } else {
//       throw new Error('Error updating user');
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       message: 'Something went wrong',
//       details: error.message,
//     });
//   }
// });

// companyrequestRouter.get('/reject/:id', async (req, res) => {
//   try {
//     const id = req.params.id;

//     const reject = await companyRequestModel.deleteOne({ _id: id });

//     if (reject && reject.deletedCount === 1) {
//       return res.status(200).json({
//         success: true,
//         message: 'User rejected',
//       });
//     } else if (reject && reject.deletedCount === 0) {
//       return res.status(400).json({
//         success: false,
//         message: 'User not found or already rejected',
//       });
//     } else {
//       throw new Error('Error deleting user');
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       message: 'Something went wrong',
//       details: error.message,
//     });
//   }
// });

companyrequestRouter.get('/approve/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const approve = await companyRequestModel.updateOne({ _id: id }, { $set: { status: 1 } });

    if (approve && approve.modifiedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'User approved',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already approved',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});
companyrequestRouter.get('/reject/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const reject = await companyRequestModel.updateOne({ _id: id }, { $set: { status: 2 } });

    if (reject && reject.modifiedCount === 0) {
      return res.status(200).json({
        success: true,
        message: 'User approved',
      });
    } else if (reject && reject.modifiedCount === 1) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already rejected',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});

companyrequestRouter.get('/view-response/:id',async(req,res)=>{
  try {
    const id = req.params.id
  
      const request = await companyRequestModel.aggregate([
        
          {
            '$lookup': {
              'from': 'company_register_tbs', 
              'localField': 'company_id', 
              'foreignField': '_id', 
              'as': 'company'
            }
          },
        
        {
          "$unwind": "$company"
        },
        {
          '$match':{
          'college_id':new objectId(id)
        }
      },
        {
          "$group": {
            '_id': "$_id",
            'companyname': { "$first": "$company.companyname" },
            'email': { "$first": "$company.email" },
            'phone': { "$first": "$company.phone" },
            'subject': { "$first": "$subject" },
            'message': { "$first": "$message" },
            'status': { "$first": "$status" },
            'date': { "$first": "$date" },
            'company_id': { "$first": "$company_id" },
            'college_id': { "$first": "$college_id" },
            
          }
        }
      ])
      
      // find({company_id:id})
      if(request[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:request
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

companyrequestRouter.get('/view-placementrequest/:id',async(req,res)=>{
  try {
    const id = req.params.id
      const request = await companyRequestModel.aggregate([
        
          {
            '$lookup': {
              'from': 'pofficer_register_tbs', 
              'localField': 'college_id', 
              'foreignField': '_id', 
              'as': 'college'
            }
          },
        
        {
          "$unwind": "$college"
        },
        {'$match':{
          'company_id':new objectId(id)
        }},
        {
          "$group": {
            '_id': "$_id",
            'collegename': { "$first": "$college.collegename" },
            'subject': { "$first": "$subject" },
            'message': { "$first": "$message" },
            'status': { "$first": "$status" },
            'company_id': { "$first": "$company_id" },
            'college_id': { "$first": "$college_id" },
          }
        }
      ])
      
      // find({company_id:id})
      if(request[0]!=undefined){
          return res.status(200).json({
              success:true,
              error:false,
              data:request
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






  companyrequestRouter.post('/create_placementrequest', async (req, res) => {
  try {
    const dateString = new Date();
      const date = new Date(dateString);
      const formattedDate = date.toISOString().split('T')[0];
    const oldUser = await companyRequestModel.findOne({ college_id: req.body.college_id,company_id: req.body.company_id })
    if (oldUser) {
      return res.status(406).json({
        success: false,
        error: true,
        message: "Already requested"
      })
    }
    const data = {
      college_id:req.body.college_id,
      company_id:req.body.company_id,
      subject:req.body.subject,
      date: formattedDate,
      message:req.body.message,
      status:0,
   
    };
    const savedData = await companyRequestModel(data).save();

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

module.exports = companyrequestRouter;