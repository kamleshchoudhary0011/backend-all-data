import { Router } from "express";
import { userLogin,refreshControler, userRegister,meControler } from "../contorller/AuthContoler.js";
import { loginValidator, registerValidetor } from "../validetor/AuthValidetor.js";
import { authenticate } from "../middleware/AuthMiddleware.js";


const router = Router();

router.post("/register",registerValidetor, userRegister)
router.post("/login",loginValidator, userLogin)

router.post('/refresh',authenticate,refreshControler)

router.get('/me',meControler)



export default router