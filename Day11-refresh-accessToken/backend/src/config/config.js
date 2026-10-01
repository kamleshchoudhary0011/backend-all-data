import dotenv from "dotenv"
dotenv.config();


const config= {
MONGO_URI:process.env.MONGO_URI,

REFRESF_TOKEN_SECRET:process.env.REFRESF_TOKEN_SECRET,

ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET
}


export default config