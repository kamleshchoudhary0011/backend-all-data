import express from "express"
import Authrouter from "../Routes/userRoute.js";
import cookieParcer from "cookie-parser"
const app = express()

app.use(express.json())
app.use(cookieParcer())
app.use("/api/auth", Authrouter);


export default app;
