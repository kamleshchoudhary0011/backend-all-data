import { body ,validationResult} from "express-validator"






 export const registerValidation =[
  body("email").exists().withMessage("Email is required")
  .isEmail().withMessage("Invalid Email Addredd"),
  body("phone").exists().withMessage("Phone number is requires")
  .isMobilePhone("en-IN").withMessage("Invalid phone number "),
  body("password").exists().withMessage("password is required")
  .trim().isLength({min : 6}).withMessage("password must be atlist 6 charectore long"),
(req,res,next)=>{
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message:"Invalid Request",
      errors :errors.array()
    })
  }
  next()
}
 
]