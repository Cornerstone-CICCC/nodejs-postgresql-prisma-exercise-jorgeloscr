// Set up your server

import express  from "express";
import productRouter from "./routes/products.routes";
import dotenv from 'dotenv'

const app= express()

app.use(express.json())

app.use('/api/products',productRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})