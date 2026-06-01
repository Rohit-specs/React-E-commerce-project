import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import HomeCarousel from "../components/HomeCarousel";
import { Link } from "react-router-dom";
import { Heart, Search } from "react-bootstrap-icons";
import featureItem1 from './../assets/icons/feature-items/1.png'
import featureItem2 from './../assets/icons/feature-items/2.png'
import featureItem3 from './../assets/icons/feature-items/3.png'
import featureItem4 from './../assets/icons/feature-items/4.png'
import bannerImage1 from './../assets/images/banner-area/banner-area-img-1.jpg'
import bannerImage2 from './../assets/images/banner-area/banner-area-img-2.jpg'
import bannerImage3 from './../assets/images/banner-area/banner-area-img-3.jpg'
import bannerImage4 from './../assets/images/banner-area/banner-area-img-4.jpg'
import bannerImage5 from './../assets/images/banner-area/banner-area-img-5.jpg'
import brandLogo1 from './../assets/images/brand-logo/1.png'
import brandLogo2 from './../assets/images/brand-logo/2.png'
import brandLogo3 from './../assets/images/brand-logo/3.png'
import brandLogo4 from './../assets/images/brand-logo/4.png'
import brandLogo5 from './../assets/images/brand-logo/5.png'
import brandLogo6 from './../assets/images/brand-logo/6.png'


const Home = () => {
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProductsData(data.products);
            })


    }, [])
    return (<>
        <HomeCarousel carouselData={productsData} />
        <div className="ltn__feature-area mt-100 mt--65" >
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 z-1 ltn__border section-bg-6 position-relative">
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <Image src={featureItem1} alt="#" />
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Free shipping</h4>
                                    <p>On all orders over $49.00</p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <Image src={featureItem2} alt="#" />
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>15 days returns</h4>
                                    <p>Moneyback guarantee</p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <Image src={featureItem3} alt="#" />
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Secure checkout</h4>
                                    <p>Protected by Paypal</p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-8">
                                <div className="ltn__feature-icon">
                                    <Image src={featureItem4} alt="#" />
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>Offer & gift here</h4>
                                    <p>On all orders over</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="ltn__banner-area  mt-80">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4} md={6}>
                        <div className="ltn__banner-item">
                            <div className="ltn__banner-img">
                                <Link href="/shop"><Image src={bannerImage1} alt="Banner Image" /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="ltn__banner-item">
                            <div className="ltn__banner-img">
                                <Link href="/shop"><Image src={bannerImage2} alt="Banner Image" /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="ltn__banner-item">
                            <div className="ltn__banner-img">
                                <Link href="/shop"><Image src={bannerImage3} alt="Banner Image" /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="ltn__product-area ltn__product-gutter  pt-65 pb-40">
            <Container >
                <Row>
                    <Col lg={12}>
                        <div className="section-title-area text-center">
                            <h1 className="section-title section-title-border">new arrival items</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {productsData.slice(0, 8).map((value, index) => {
                        return (

                            <Col key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div className="ltn__product-item text-center">
                                    <div className="product-img">
                                        <Link to="/shop"><Image src={`${value.images}`} alt="#" /></Link>
                                        <div className="product-badge">
                                            <ul>
                                                <li className="badge-2">{Math.round(value.discountPercentage)}%</li>
                                            </ul>
                                        </div>
                                        <div className="product-hover-action product-hover-action-2">
                                            <ul>
                                                <li>
                                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                        <Search />
                                                    </a>
                                                </li>
                                                <li className="add-to-cart">
                                                    <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                        <span className="cart-text d-none d-xl-block">Add to Cart</span>
                                                        <span className="d-block d-xl-none"><i className="icon-handbag"></i></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title"><a href="product-details.html">Pink Flower Tree</a></h2>
                                        <div className="product-price">
                                            <span>${value.price}</span>
                                            <del>${(value.price / (1 - (value.discountPercentage / 100))).toFixed(2)}</del>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        </div>
        <div className="ltn__banner-area ">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="ltn__banner-item">
                            <div className="ltn__banner-img">
                                <Link to="/shop"><Image src={bannerImage4} alt="Banner Image" /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="ltn__banner-item">
                            <div className="ltn__banner-img">
                                <Link to="/shop"><Image src={bannerImage5} alt="Banner Image" /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* incompleted section */}
        <div className="ltn__product-slider-area ltn__product-gutter  pt-60 pb-40">
            <Container>
                <Row >
                    <Col lg={12}>
                        <div className="section-title-area text-center">
                            <h1 className="section-title section-title-border">top products</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="ltn__product-slider-item-four-active slick-arrow-1">
                    {productsData.map((value, index) => {
                        return (
                            <Col xs={12} key={index}>

                                <div className="ltn__product-item text-center">
                                    <div className="product-img">
                                        <Link to="/shop"><Image src={value.images} alt="#" /></Link>
                                        <div className="product-badge">
                                            <ul>
                                                <li className="badge-2">{Math.round(value.discountPercentage)}%</li>
                                            </ul>
                                        </div>
                                        <div className="product-hover-action product-hover-action-2">
                                            <ul>
                                                <li>
                                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                        <Search />
                                                    </a>
                                                </li>
                                                <li className="add-to-cart">
                                                    <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                        <span className="cart-text d-none d-xl-block">Add to Cart</span>
                                                        <span className="d-block d-xl-none"><i className="icon-handbag"></i></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h2 className="product-title"><Link to="/shop">{value.title}</Link></h2>
                                        <div className="product-price">
                                            <span>${value.price}</span>
                                            <del>${(value.price / (1 - (value.discountPercentage / 100))).toFixed(2)}</del>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        </div>
        <div className="ltn__banner-area ">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="ltn__banner-item">
                            <div className="ltn__banner-img">
                                <Link to="/shop"><Image src="img/banner/10.jpg" alt="Banner Image" /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
        {/* incompleted section */}
        <div className="ltn__blog-area  pt-60 pb-30">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="section-title-area text-center">
                            <h1 className="section-title section-title-border">latest news</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="ltn__blog-slider-one-active slick-arrow-1">
                    <Col lg={12}>
                        <div className="ltn__blog-item">
                            <div className="ltn__blog-img">
                                <Link to="/blog-details"><Image src="img/blog/1.jpg" alt="#" /></Link>
                            </div>
                            <div className="ltn__blog-brief">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-author d-none">
                                            <a href="#">by: Admin</a>
                                        </li>
                                        <li>
                                            <span> Nov 18, 2020</span>
                                        </li>
                                        <li className="ltn__blog-comment">
                                            <a href="#"><i className="icon-speech"></i> 2</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="ltn__blog-title blog-title-line"><Link to="/blog-details">Lorem ipsum dolor sit amet con adipisicing elit sed </Link></h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="ltn__brand-logo-area  ltn__brand-logo-1 section-bg-1 pt-35 pb-35 plr--5">
            <Container fluid={true}>
                <Row className="ltn__brand-logo-active">
                    {[brandLogo1,brandLogo2,brandLogo3,brandLogo4,brandLogo5,brandLogo6].map((val, index) => {
                        return (
                            <Col key={index}>
                                <div className="ltn__brand-logo-item">
                                    <Image src={val} alt="Brand Logo" />
                                </div>
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        </div>
    </>
    )
}

export default Home