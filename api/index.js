import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../api/routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGODB)
.then(()=>{
        console.log('MongoDB is connected')
    }
).catch((error)=>{
    console.log(error);
})  

const app = express();


app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
}) 

app.use('/api/user',userRoutes )