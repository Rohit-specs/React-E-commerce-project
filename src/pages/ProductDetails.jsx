import { Button, Col, Container, Form, Image, Nav, Row, Tab } from 'react-bootstrap'
import BreadCrumbs from '../components/BreadCrumbs'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Heart, Hearts, Search, Star, StarFill } from 'react-bootstrap-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link, useParams } from 'react-router-dom'
import { getProductById,getAllProducts} from '../api/services'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/CartSlice'
import { toast } from 'react-toastify'
const ProductDetails = () => {
    const [showImage, setShowImage] = useState()
    const [product, setProduct] = useState();
    const [productsData, setProductsData] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch()
   useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductById(id);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProducts();
                setProductsData(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
 fetchProducts();

}, []);

    useEffect(() => {
        if (product?.images?.length > 0) {
            setShowImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    const {
        images = [],
        reviews = [],
        title = "",
        description = "",
        sku = "",
        discountPercentage = 0,
        tags = [],
        price = 0,
        category = "",
    } = product;

    const relatedProducts = productsData.filter((item) => {
        if (item.id === product.id) return false;

        const itemTags = item.tags || [];

        return itemTags.some((tag) => tags.includes(tag));
    });
    return (
        <>
            <BreadCrumbs />
            <div className="ltn__shop-details-area pb-70">
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className="ltn__shop-details-inner">
                                <Row>
                                    <Col md={6}>
                                        <div className="ltn__shop-details-img-gallery ltn__shop-details-img-gallery-2">
                                            <div className="ltn__shop-details-small-img slick-arrow-2">


                                                {images.map((image, index) => {
                                                    return (<div key={index} className="single-small-img">
                                                        <Image src={image} role='button' alt="Image" onClick={() => setShowImage(image)} />
                                                    </div>)
                                                })}





                                            </div>
                                            <div className="ltn__shop-details-large-img">


                                                <div className="single-large-img">

                                                    <a href={showImage} data-rel="lightcase:myCollection">
                                                        <Image src={showImage} alt="Image" />
                                                    </a>
                                                </div>



                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>


                                        <div className="modal-product-info shop-details-info pl-0">
                                            <h3>{title}</h3>
                                            <div className="product-price-ratting mb-20">
                                                <ul>
                                                    <li>
                                                        <div className="product-price">
                                                            <span>${price}</span>
                                                            <del>${(price / (1 - (discountPercentage / 100))).toFixed(2)}</del>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="product-ratting">
                                                            <ul>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li><a href="#"><i className="icon-star"></i></a></li>
                                                                <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="modal-product-brief">
                                                <p>
                                                    {description}
                                                </p>
                                            </div>

                                            <div className="ltn__product-details-menu-2 product-cart-wishlist-btn mb-30">
                                                <ul>
                                                    <li>
                                                        <div className="cart-plus-minus">
                                                            <input type="text" defaultValue={1} name="qtybutton" className="cart-plus-minus-box" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={()=>{
                                                           dispatch(addToCart(product)) 
                                                           toast.sucess("Product Added to Cart")
                                                        }} className="theme-btn-1 btn btn-effect-1 d-add-to-cart" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                            <span>ADD TO CART</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="btn btn-effect-1 d-add-to-wishlist" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__social-media mb-30">
                                                <ul>
                                                    <li className="d-meta-title">Share:</li>
                                                    <li><a href="#" title="Facebook"><i className="icon-social-facebook"></i></a></li>
                                                    <li><a href="#" title="Twitter"><i className="icon-social-twitter"></i></a></li>
                                                    <li><a href="#" title="Pinterest"><i className="icon-social-pinterest"></i></a></li>
                                                    <li><a href="#" title="Instagram"><i className="icon-social-instagram"></i></a></li>

                                                </ul>
                                            </div>
                                            <div className="modal-product-meta ltn__product-details-menu-1 mb-30">
                                                <ul>
                                                    <li><strong>SKU:</strong> <span>{sku}</span></li>
                                                    <li>
                                                        <strong>Categories:</strong>
                                                        <span>
                                                            <a href="#">{category}</a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <strong>Tags:</strong>
                                                        <span>
                                                            {tags.map((tag, index) => {
                                                                return (
                                                                    <a key={index} href="#">{tag}</a>
                                                                )
                                                            })}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__safe-checkout d-none">
                                                <h5>Guaranteed Safe Checkout</h5>
                                                <Image src="img/icons/payment-2.png" alt="Payment Image" />
                                            </div>
                                        </div>




                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="ltn__shop-details-tab-area pb-60">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Tab.Container defaultActiveKey="description">
                                <div className="ltn__shop-details-tab-inner">
                                    <div className="ltn__shop-details-tab-menu">
                                        <Nav>
                                            <Nav.Item>
                                                <Nav.Link eventKey="description">
                                                    Description
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="reviews">
                                                    Reviews
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="shipping">
                                                    Shipping
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="description">
                                            <div className="ltn__shop-details-tab-content-inner text-center">
                                                <p>
                                                    {description}
                                                </p>
                                            </div>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="reviews">
                                            <div className="ltn__shop-details-tab-content-inner">
                                                <div className="customer-reviews-head text-center">
                                                    <h4 className="title-2">Customer Reviews</h4>

                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star"></i>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-star-half-alt"></i>
                                                            </li>
                                                            <li>
                                                                <i className="far fa-star"></i>
                                                            </li>
                                                            <li className="review-total">
                                                                (95 Reviews)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <hr />

                                                <Row>
                                                    <Col lg={7}>
                                                        <div className="ltn__comment-area mb-30">
                                                            <div className="ltn__comment-inner">
                                                                <ul>
                                                                    {reviews.map((item, index) => (
                                                                        <li key={index}>
                                                                            <div className="ltn__comment-item clearfix">
                                                                                <div className="ltn__commenter-img">
                                                                                    <img
                                                                                        src={`/img/testimonial/${item}.jpg`}
                                                                                        alt="Reviewer"
                                                                                    />
                                                                                </div>

                                                                                <div className="ltn__commenter-comment">
                                                                                    <h6>
                                                                                        <a href="#!">{item.reviewerName}</a>
                                                                                    </h6>

                                                                                    <div className="product-ratting">
                                                                                        <ul>
                                                                                            {[...Array(5)].map((_, i) =>
                                                                                                i < item.rating ? (
                                                                                                    <li><StarFill key={i} color="gold" /></li>

                                                                                                ) : (
                                                                                                    <li><Star key={i} color="gold" /></li>
                                                                                                )
                                                                                            )}


                                                                                        </ul>
                                                                                    </div>

                                                                                    <p>
                                                                                        {item.comment}
                                                                                    </p>

                                                                                    <span className="ltn__comment-reply-btn">
                                                                                        {item.date}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col lg={5}>
                                                        <div className="ltn__comment-reply-area ltn__form-box mb-60">
                                                            <Form>
                                                                <h4 className="title-2">Add a Review</h4>

                                                                <div className="mb-30">
                                                                    <div className="add-a-review">
                                                                        <h6>Your Ratings:</h6>

                                                                        <div className="product-ratting">
                                                                            <ul>
                                                                                <li>
                                                                                    <i className="fas fa-star"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fas fa-star"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fas fa-star"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fas fa-star-half-alt"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i className="far fa-star"></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="input-item input-item-textarea ltn__custom-icon mb-3">
                                                                    <Form.Control
                                                                        as="textarea"
                                                                        rows={5}
                                                                        placeholder="Type your comments...."
                                                                    />
                                                                </div>

                                                                <div className="input-item input-item-name ltn__custom-icon mb-3">
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Type your name...."
                                                                    />
                                                                </div>

                                                                <div className="input-item input-item-email ltn__custom-icon mb-3">
                                                                    <Form.Control
                                                                        type="email"
                                                                        placeholder="Type your email...."
                                                                    />
                                                                </div>

                                                                <div className="input-item input-item-website ltn__custom-icon mb-3">
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Type your website...."
                                                                    />
                                                                </div>

                                                                <Form.Check
                                                                    type="checkbox"
                                                                    id="save-info"
                                                                    label="Save my name, email, and website in this browser for the next time I comment."
                                                                    className="mb-3"
                                                                />

                                                                <div className="btn-wrapper">
                                                                    <Button
                                                                        type="submit"
                                                                        className="theme-btn-1 btn-effect-1 text-uppercase"
                                                                    >
                                                                        Submit
                                                                    </Button>
                                                                </div>
                                                            </Form>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="shipping">
                                            <div className="ltn__shop-details-tab-content-inner">
                                                <h4 className="title-2">
                                                    Shipping policy for our store
                                                </h4>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Nam voluptates rerum neque ea libero numquam
                                                    officiis ipsum.
                                                </p>

                                                <ul>
                                                    <li>
                                                        1-2 business days (Typically by end of day)
                                                    </li>
                                                    <li>30 days money back guarantee</li>
                                                    <li>24/7 live support</li>
                                                    <li>
                                                        odio dignissim qui blandit praesent
                                                    </li>
                                                    <li>
                                                        luptatum zzril delenit augue duis dolore
                                                    </li>
                                                    <li>
                                                        te feugait nulla facilisi
                                                    </li>
                                                </ul>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Omnis, quia vel eligendi ipsam.
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    )
}

export default ProductDetails
