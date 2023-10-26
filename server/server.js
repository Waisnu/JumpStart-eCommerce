import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import products from './data/products.js'

const port = process.env.PORT || 5000

connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('this is the API running on this port')
})

app.use('/api/products', productRoutes)




app.listen(port, () => {
console.log(`JumpStart app listening at http://localhost:${port}`)
})