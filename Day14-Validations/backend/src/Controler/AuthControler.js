import userModel from "../Model/userMode.js"






export const RagisterControler = async() =>{
const {email , phone , password} =  req.body;




const user = await userModel.create({
  email,
  phone,
  password,

})


res.status(201).json({
  message:"user ragister",
  data:{
    email , phone,
    id:user._id
  }
})

}

