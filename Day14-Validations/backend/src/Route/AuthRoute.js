import { Router } from "express";
import { RagisterControler } from "../Controler/AuthControler.js";

import { registerValidation } from "../validetors/AuthValidetors.js";

const router = Router()


router.post("/register",registerValidation,RagisterControler)




export default router