import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import userRoute from './routes/auth.js'
import cors from 'cors'
dotenv.config();

const app=express();


//database
connectDb();



//middleware
app.use(express.json());
app.use(cors());

//routes

app.use('/api/user',userRoute);



//server 
const PORT=5000||process.env.PORT;
app.listen(PORT,()=>console.log(`server is running at ${PORT}`));