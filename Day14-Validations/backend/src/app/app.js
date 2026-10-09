import express from "express"
const app = express()
import router from "../Route/AuthRoute.js";

app.use(express.json());


app.use("/api/auth",router)


export default app