import express from "express"
// import app from "../app/app"
import { ragister,me,refreshToken } from "../controler/authControler.js";


const router = express.Router()



router.post("/register" ,ragister)

router.get("/me" ,me)
router.post("/refresh" ,refreshToken)



export default router