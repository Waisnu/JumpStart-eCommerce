import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded fixed-width-card text-primary-emphasis' >
      <Link to={`/product/${product._id}`}>
        <div className="card-image-container">
          <Card.Img src={product.image} alt={product.name} />
        </div>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className='product-rating'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='div' className='product-price'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
