
import dotenv from "dotenv"

dotenv.config();


const config = {

MONGODB_URI :process.env.MONGODB_URI,
Access_Token_SECREAT:process.env.Access_Token_SECREAT,
REFRESH_TOKEN_SECREAT:process.env.REFRESH_TOKEN_SECREAT,
}


export default config