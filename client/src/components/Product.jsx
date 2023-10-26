import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'   


const Product = ({productPropsz}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${productPropsz._id}`}>
            <Card.Img src={productPropsz.image} variant='top' />
        </a>

        <Card.Body>
            <Link to={`/product/${productPropsz._id}`}>
                <Card.Title as='div' className='product-title'>
                    <strong>{productPropsz.name}</strong>
                </Card.Title>
            </Link>

           <Card.Text as='div'>
                <Rating value={productPropsz.rating} text={`${productPropsz.numReviews} reviews`} />
            </Card.Text>

            
            <Card.Text as='h3'>${productPropsz.price}</Card.Text>

            
        </Card.Body>
    </Card>

  )
}

export default Product