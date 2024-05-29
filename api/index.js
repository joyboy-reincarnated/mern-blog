import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../api/routes/user.route.js'
import authRoutes from '../api/routes/auth.route.js'
import postRoutes from '../api/routes/post.route.js'
import commentRoutes from '../api/routes/comment.route.js'
import cookieParser from 'cookie-parser';
import path from 'path'


dotenv.config()

mongoose.connect(process.env.MONGODB)
.then(()=>{  
        console.log('MongoDB is connected')
    }
).catch((error)=>{
    console.log(error);
})  


const __dirname = path.resolve()
const app = express();
app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>[
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
])


app.listen(3000,()=>{
    console.log('Server is running on port 3000!')
}) 

app.use('/api/user',userRoutes )
app.use('/api/auth',authRoutes )
app.use('/api/post',postRoutes )
app.use('/api/comment',commentRoutes)

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})