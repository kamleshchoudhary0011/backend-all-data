import express from "express"
import Authrouter from "../Routes/userRoute.js";
import cookieParcer from "cookie-parser"
import productRoute from "../Routes/productRoute.js"
const app = express()

app.use(express.json())
app.use(cookieParcer())
app.use("/api/auth", Authrouter);
app.use("/api/products",productRoute);


export default app;
