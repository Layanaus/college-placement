// const companycreatejobRouter = express.Router();

// companycreatejobRouter.get('/view-jobs', async (req, res) => {
//   try {
   
//     const users = await companyCreateJobModel.aggregate([


//       {
//         '$lookup': {
//           'from': 'company_register_tbs',
//           'localField': 'login_id',
//           'foreignField': 'login_id',
//           'as': 'company'
//         }
//       },
//       {
//         "$unwind": "$company"
//       },
//       {
//         "$group": {
//           '_id': "$_id",
//           'companyname': { "$first": "$company.companyname" },
//           'jobname': { "$first": "$jobname" },
//           'jobdescription': { "$first": "$jobdescription" },
//           'jobcategory': { "$first": "$jobcategory" },  
//           'vaccancy': { "$first": "$vaccancy" },
//           'qualification': { "$first": "$qualification" },
//           'expectedsalary': { "$first": "$expectedsalary" },
//           'lastdate': { "$first": "$lastdate" },
//           'login_id': { "$first": "$login._id" },
//         }
//       }
//     ])
  
   
//     if (users[0] !== undefined) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         data: users,
//       });
//     } else {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: 'No data found',
//       });
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: 'Something went wrong',
//       details: error,
//     });
//   }
// });
