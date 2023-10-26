import express from 'express'
const router = express.Router()
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'



router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id',asyncHandler(async (req, res) => {
    const product = await Product.findbyId(req.params.id)

    if(product ) {
        res.json(product)    
    }

    res.status(404).json({message: 'Product not found!'})
}))


export default router