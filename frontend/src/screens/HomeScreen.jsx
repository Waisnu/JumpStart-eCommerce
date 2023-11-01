
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import rocket from '../assets/rocket.gif';
import nike from '../assets/image-styles/nike.png';
import adidas from '../assets/image-styles/adidas.png';
import amazon from '../assets/image-styles/amazon.png';
import apple from '../assets/image-styles/apple.png';
import etsy from '../assets/image-styles/etsy.png';
import paypal from '../assets/image-styles/paypal.png';
import deliveryIllustration from '../assets/image-styles/delivery-illu.png';
import illustrationImage from '../assets/image-styles/home-illu.png';
import { Link, Element } from 'react-scroll';


const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });


  

  return (
    <>
      <Row className='home-section'>
        {/* Left side with heading and action button */}
        <Col sm={12} md={6}>
        
          <div className='left-content'>
            <h1 className='heading'>Your Fashion Choice</h1>
            <p className='description'>
            Discover Jumpstart Ecommerce, your fashion destination. Explore the latest trends in apparel and accessories, and start your fashion journey with us.

            </p>
            <Link
              to="shopnow"
              className='btn btn-primary'
              spy={true}
              smooth={true}
              duration={50}
            >
              Shop Now
            </Link>
          </div>
        </Col>

        {/* Right side with illustration */}
        <Col sm={12} md={6} lg={6} xl={6}   >
          <img
            src={illustrationImage}
            alt='Illustration'
            className='illustration-image-home'
          />
        </Col>
      </Row>

      {/* DELIVERY HERO */}
      <Row className='home-section'>
  {/* Right side with illustration */}
  <Col sm={12} md={6} lg={6} xl={6}>
    <img
      src={deliveryIllustration}
      alt='Illustration'
      className='illustration-image-delivery'
    />
  </Col>
  
  {/* Left side with heading and action button */}
  <Col sm={12} md={6} lg={6} xl={6}>
    <div className='right-content'>
      <h1 className='heading-delivery'> Rocketing-Fast Delivery, with Zero Hassles!<span> <img src={rocket} alt="" /></span></h1>
      
      <p className='text-end py-1 mx-2'>
      At Jumpstart, we've transformed the shopping experience, guaranteeing swift and stress-free deliveries. Bid farewell to long waits and embrace instant satisfaction!    </p>
    </div>
  </Col>
</Row>

      

      

{/* Sponsors Section */}

<h1 className='text-center'>Meet Our Incredible Sponsors</h1>
<h5 className='text-center'>The driving force behind our success.</h5>

<div className='sponsors-center'>
  <div className='sponsors-logos '>
    <div className='sponsor'>
      <img src={nike} alt='Nike' />
      <p>Nike</p>
    </div>
    <div className='sponsor'>
      <img src={apple} alt='Adidas' />
      <p>Apple</p>
    </div>
    <div className='sponsor'>
      <img src={amazon} alt='Apple' />
      <p>Amazon</p>
    </div>
    <div className='sponsor'>
      <img src={etsy} alt='Apple' />
      <p>Etsy</p>
    </div>
    <div className='sponsor'>
      <img src={adidas} alt='Apple' />
      <p>Adidas</p>
    </div>
    <div className='sponsor'>
      <img src={paypal} alt='Apple' />
      <p>PayPal</p>
    </div>
  </div>
</div>








      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />

          <h2 className='center-heading'>LATEST 🔥</h2>
          <Element name="shopnow" id="shopnow">
            <Row>
              {data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Element>

          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
