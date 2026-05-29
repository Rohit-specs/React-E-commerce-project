import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";

const Home = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
            <Slider {...settings} className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white---">

                {/* <div className="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---" data-bs-bg="img/slider/1.jpg">
                    <div className="ltn__slide-item-inner">
                        <Container className="container">
                            <Row>
                                <Col lg="12" className="align-self-center">
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
                                    <div className="slide-item-img">
                                        <Image src="img/slider/41-1.png" alt="#" />
                                        <span className="call-to-circle-1"></span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---" data-bs-bg="img/slider/1.jpg">
                    <div className="ltn__slide-item-inner">
                        <Container className="container">
                            <Row>
                                <Col lg="12" className="align-self-center">
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
                                    <div className="slide-item-img">
                                        <Image src="img/slider/41-1.png" alt="#" />
                                        <span className="call-to-circle-1"></span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div> */}
            </Slider>
            {/* <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white---">


                <div className="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---" data-bs-bg="img/slider/3.jpg">
                    <div className="ltn__slide-item-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 align-self-center">
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
                                                        <a href="service.html" className="theme-btn-1 btn btn-round">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item-img">
                                        <Image src="img/slider/41-1.png" alt="#" />
                                        <span className="call-to-circle-1"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home