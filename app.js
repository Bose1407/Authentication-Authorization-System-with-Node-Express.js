require('dotenv').config()
const express = require('express')


const port = 5000
const app = express()
const connectdb = require('./db/connect')
const router = require('./routes/route')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api',router)

app.listen(port,async()=>{
    try{
        await connectdb(process.env.MONGO_URI)
        console.log(`App is currently running at port ${port}`)
    }catch(error){
        console.log(error);
    }
})