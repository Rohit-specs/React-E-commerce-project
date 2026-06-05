import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Cart, Envelope, Facebook, Heart, Instagram, Person, Phone, Pin, Search, Twitter } from "react-bootstrap-icons";
import brandLogo1 from './../assets/images/brand-logo/1.png'
import brandLogo2 from './../assets/images/brand-logo/2.png'
import brandLogo3 from './../assets/images/brand-logo/3.png'
import brandLogo4 from './../assets/images/brand-logo/4.png'
import brandLogo5 from './../assets/images/brand-logo/5.png'
import brandLogo6 from './../assets/images/brand-logo/6.png'
import payment_image_6 from './../assets/images/payment-6.png';
import fiamaLogo from './../assets/logo/logo.png';
const RootLayout = () => {
  return (
    <>
      <header className="ltn__header-area ltn__header-3 section-bg-6">
        <div className="ltn__header-middle-area">
          <Container>
            <Row className="align-items-center">
              <Col>
                <div className="site-logo">
                  <NavLink to="/">
                    <Image src={fiamaLogo} alt="Logo" />
                  </NavLink>
                </div>
              </Col>

              <Col className="header-contact-serarch-column d-none d-xl-block">
                <div className="header-contact-search">
                  <div className="header-feature-item">
                    <div className="header-feature-icon">
                      <Phone />
                    </div>

                    <div className="header-feature-info">
                      <h6>Phone</h6>

                      <p>
                        <a href="tel:0123456789">
                          +0123-456-789
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="header-search-2">
                    <Form id="search-form" method="get">
                      <Form.Control
                        type="text"
                        name="search"
                        placeholder="Search here..."
                      />


                      <button type="submit">
                        <span> <Search /></span>

                      </button>

                    </Form>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="ltn__header-options d-flex justify-content-between flex-row">
                  <ul>
                    <li className="d-none">
                      <div className="ltn__drop-menu ltn__currency-menu">
                        <ul>
                          <li>
                            <Link to="/" className="dropdown-toggle">
                              <span className="active-currency">USD</span>
                            </Link>

                            <ul>
                              <li><Link to="/login">USD - US Dollar</Link></li>
                              <li><Link to="/wishlist">CAD - Canada Dollar</Link></li>
                              <li><Link to="/register">EUR - Euro</Link></li>
                              <li><Link to="/account">GBP - British Pound</Link></li>
                              <li><Link to="/wishlist">INR - Indian Rupee</Link></li>
                              <li><Link to="/wishlist">BDT - Bangladesh Taka</Link></li>
                              <li><Link to="/wishlist">JPY - Japan Yen</Link></li>
                              <li><Link to="/wishlist">AUD - Australian Dollar</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="d-none">
                      <div className="header-search-wrap">
                        <div className="header-search-1">
                          <div className="search-icon">
                            <i className="icon-magnifier for-search-show"></i>
                            <i className="icon-magnifier-remove for-search-close"></i>
                          </div>
                        </div>

                        <div className="header-search-1-form">
                          <Form id="mobile-search-form" method="get">
                            <Form.Control
                              type="text"
                              name="search"
                              placeholder="Search here..."
                            />

                            <Button type="submit">
                              <Search />

                            </Button>


                          </Form>

                        </div>
                      </div>
                    </li>

                    <li className="d-none">
                      <div className="ltn__drop-menu user-menu">
                        <ul>
                          <li>
                            <NavLink to="/account">
                              <Person />
                            </NavLink>

                            <ul>
                              <li><NavLink to="/login">Sign In</NavLink></li>
                              <li><NavLink to="/signup">Register</NavLink></li>
                              <li><NavLink to="/my-account">My Account</NavLink></li>
                              <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><Link className="my-auto mx-2">
  <Heart/>
</Link></li>

                    <li>
                      <div className="mini-cart-icon mini-cart-icon-2">
                        
                        <Link
                          to="/cart"
                          className="ltn__utilize-toggle"
                        >
                          <span className="mini-cart-icon">
                            <Cart/>
                            <sup>2</sup>
                          </span>

                          <h6>
                            <span>Your Cart</span>{" "}
                            <span className="ltn__secondary-color">
                              $89.25
                            </span>
                          </h6>
                        </Link>
                      </div>
                    </li>

                    <li>
                      <div className="mobile-menu-toggle d-lg-none">
                        <a
                          href="#ltn__utilize-mobile-menu"
                          className="ltn__utilize-toggle"
                        >
                          <svg viewBox="0 0 800 600">
                            <path
                              d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                              id="top"
                            ></path>

                            <path
                              d="M300,320 L540,320"
                              id="middle"
                            ></path>

                            <path
                              d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                              id="bottom"
                              transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="header-bottom-area ltn__border-top ltn__header-sticky ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none d-lg-block">
          <Container>
            <Row>
              <Col className="header-menu-column justify-content-center">
                <div className="sticky-logo">
                  <div className="site-logo">
                    <NavLink to="/">
                      <Image src="img/logo.png" alt="Logo" />
                    </NavLink>
                  </div>
                </div>

                <div className="header-menu header-menu-2">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <NavLink to="/">Home</NavLink>
                        </li>

                        <li className="menu-icon">
                          <NavLink to="/pages">Pages</NavLink>
                        </li>

                        <li className="menu-icon">
                          <NavLink to="/shop">Shop</NavLink>
                        </li>

                        <li className="menu-icon">
                          <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>

                        <li className="menu-icon">
                          <NavLink to="/news">News</NavLink>
                        </li>

                        <li className="menu-icon">
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <main>
        <Outlet />
        <div className="ltn__brand-logo-area  ltn__brand-logo-1 section-bg-1 pt-35 pb-35 plr--5">
                <Container fluid={true}>
                    <Row className="ltn__brand-logo-active">
                        {[brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo6].map((val, index) => {
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
      </main>
      <footer className="ltn__footer-area ">
        <div className="footer-top-area  section-bg-5">
          <Container>
            <Row>
              <Col xl="2" md="6" sm="6" xs="12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">My Accoout</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><Link to="/">My account</Link></li>
                      <li><Link to="/">Checkout</Link></li>
                      <li><Link to="/">Contact us</Link></li>
                      <li><Link to="/">Shopping Cart</Link></li>
                      <li><Link to="/">Wishlist</Link></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl="2" md="6" sm="6" xs="12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Quick Links</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><Link to="/locations">Store Location</Link></li>
                      <li><Link to="/order-tracking">Orders Tracking</Link></li>
                      <li><Link to="/product-details">Size Guide</Link></li>
                      <li><Link to="/account">My account</Link></li>
                      <li><Link to="/faq">FAQs</Link></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl="2" md="6" sm="6" xs="12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Information</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><Link to="/contact">Privacy Page</Link></li>
                      <li><Link to="/about">About us</Link></li>
                      <li><Link to="/contact">Careers</Link></li>
                      <li><Link to="/faq">Delivery Inforamtion</Link></li>
                      <li><Link to="/contact">Term & Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl="2" md="6" sm="6" xs="12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Service</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><Link to="/shop">Shipping Policy</Link></li>
                      <li><Link to="/contact">Help & Contact Us</Link></li>
                      <li><Link to="/account">Returns & Refunds</Link></li>
                      <li><Link to="/shop">Online Stores</Link></li>
                      <li><Link to="/contact">Terms and Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl="4" md="6" sm="6" xs="12">
                <div className="footer-widget footer-about-widget">
                  <h4 className="footer-title">About Our Shop</h4>
                  <div className="footer-logo d-none">
                    <div className="site-logo">
                      <Image src="img/logo.png" alt="Logo" />
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo incididunt ut labore et dolore</p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <Pin/>
                        </div>
                        <div className="footer-address-info">
                          <p>Brooklyn, New York, United States</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <Phone/>
                        </div>
                        <div className="footer-address-info">
                          <p><a href="tel:+0123-456789">+0123-456789</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <Envelope/>
                        </div>
                        <div className="footer-address-info">
                          <p><a href="mailto:example@example.com">example@example.com</a></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20 d-none">
                    <ul>
                      <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                  <div className="footer-payment-img">
                    <Image src={payment_image_6} alt="Payment Image" />
                  </div>
                </div>
              </Col>
            </Row></Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-5">
          <Container className="container ltn__border-top-2">
            <Row>
              <Col md="6" xs="12">
                <div className="footer-copyright-left">
                  <div className="ltn__copyright-design clearfix">
                    <p>&copy; <span className="current-year"></span> - Just For You</p>
                  </div>
                </div>
              </Col>
              <Col md="6" xs="12" className="align-self-center">
                <div className="footer-copyright-right text-end">
                  <div className="ltn__copyright-menu d-none">
                    <ul>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Claim</a></li>
                      <li><a href="#">Privacy & Policy</a></li>
                    </ul>
                  </div>
                  <div className="ltn__social-media ">
                    <ul>
                      <li><a href="#" title="Facebook"><Facebook /></a></li>
                      <li><a href="#" title="Twitter"><Twitter /></a></li>
                      <li><a href="#" title="Instagram"><Instagram /></a></li>
                      <li><a href="#" title="Pinterest"></a></li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;