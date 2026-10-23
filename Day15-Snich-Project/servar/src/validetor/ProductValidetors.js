import {body} from "express-validator"


export const createProductValidetor = [
  body("title")
  .exists().withMessage("titlte is required").bail()
  .isString().withMessage("Title must be a string ").bail().trim()
  .isLength({min:2,max:100}).withMessage("title lenght mmust be between 2 to 100 charectors").bail().isAlpha("en-US",{ignore:' '}).withMessage("Title cane only have english small case capitol case cherectors"),

  body("description").exists().withMessage("Description is required").bail().isString().withMessage("description must be a String ").bail()
  .trim().isLength({min:10,max:500}).withMessage("description must bet atlist 22 to 500").bail(),

  body("price.amount").exists()
  .withMessage("price amount is requred ").bail().isFloat({min:0}).withMessage("price amount must be a floating number and must b grter then 0 "),

  body("proce.currency").exists().withMessage("Currency is required").bail()
  .isString().withMessage("Currency must be a string value").bail()
  .isIn(["INR","USD"]).withMessage("Currency either be INR or USD "),
  
  body("size")



]