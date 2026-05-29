import React from 'react'
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from 'react-bootstrap-icons';
const HomeCarousel = () => {

    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <div className="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
                    <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white---">
                        <div className="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---" style={{background:`url("https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp")`}}>
                            {/* <Image src=''/> */}
                            <Carousel.Caption className="ltn__slide-item-inner">
                                <Container>
                                    <Row>
                                        <Col lg={12} className="align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">
                                                    <h1 className="slide-title animated">Fresh Flower</h1>
                                                    <h6 className="slide-sub-title ltn__body-color slide-title-line animated">Natural & Beautiful Flower Here</h6>
                                                    <div className="slide-brief animated">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                    </div>
                                                    <div className="btn-wrapper animated">
                                                        <Link to="/shop" className="theme-btn-1 btn btn-round">Shop Now</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Caption>
                        </div>
                    </div>

                </div>
            </Carousel.Item>
            {/* <Carousel.Item>
                <div className="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
                    <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white---">
                        <div className="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---">
                            <div className="ltn__slide-item-inner">
                                <Container className="container">
                                    <Row>
                                        <Col lg={12} className="align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">
                                                    <div className="slide-item-info">
                                                        <div className="slide-item-info-inner ltn__slide-animation">
                                                            <h1 className="slide-title animated ">Fresh Flower</h1>
                                                            <h6 className="slide-sub-title ltn__body-color slide-title-line animated">Natural & Beautiful Flower Here</h6>
                                                            <div className="slide-brief animated">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                            </div>
                                                            <div className="btn-wrapper animated">
                                                                <a href="/shop" className="theme-btn-1 btn btn-round">Shop Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>

                </div>
            </Carousel.Item> */}

        </Carousel>

    )
}

export default HomeCarousel