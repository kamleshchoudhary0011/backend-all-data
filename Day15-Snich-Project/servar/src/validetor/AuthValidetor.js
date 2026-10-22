import {body , validationResult} from "express-validator"



export const registerValidetor = [
  body('email').trim().exists().withMessage("email is required ").bail().isEmail()
  .withMessage("enter valid emial"),

//  body("name").exists().withMessage("Name is required").bail().isString().withMessage("Name must be a string ").trim().isLength({min:2,max:50}).withMessage("Name length must between 2 to 50 charactors"),


  body("password").exists().withMessage("Password is required").bail().isString().withMessage("Password must be String").trim()
  .isLength({min:6 }).withMessage("password atlist must 6 charectors"),

(req, res,next)=>{

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    
    return res.status(400).json({
      message:"Invalid Request",
      errors:errors.array()
    })
  }

  next()

}
]


export const loginValidator = [
  body("email").exists().withMessage("Email is required").bail().isString().withMessage("Email must be astring value").bail().trim().isEmail().
  withMessage("Entire a valid email address"),

  body("password").exists().withMessage("Password is required").bail().trim().isString().withMessage("password myst be a string value").isLength({min:6}).withMessage("password at liest 6 charecotor longer"),
  
  (req , res ,next)=>{

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message:"Invalid data",
        errors:errors.array()
      })
    }


    next();
    
  }

]