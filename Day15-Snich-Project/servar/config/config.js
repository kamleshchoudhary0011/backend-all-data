import dotenv from "dotenv"
dotenv.config();






const config = {

  MONGO_URI:process.env.MONGO_URI,
ACCESS_TOKEN_SECRATE:process.env.ACCESS_TOKEN_SECRATE,
REFRESH_TOKEN_SECRATE:process.env.REFRESH_TOKEN_SECRATE

}
export default config