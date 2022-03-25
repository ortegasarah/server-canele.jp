const User = require("../models/User.model");
const {clearRes} = require('../middleware/util-mid')

exports.getUserLogged = async (req,res,next) =>{
    try {
      const { _id } = req.user
      const user = await User.findById(_id)
      const newUser = clearRes(user.toObject())
      res.status(200).json({ result:newUser });
    } catch(error){
      console.log("bad user",error )

      res.status(400).json({ erroMessage: error });
    }
  }

// exports.editUser = async (req,res,next)=>{
//     try{
//         const { _id } = req.user
//         const {role,password,...restUser} = req.body
//         const user = await User.findByIdAndUpdate(_id,{...restUser},{new:true})
//         const newUser = clearRes(user.toObject())
//         res.status(200).json({ result:newUser });
//     }catch(error){}
// }