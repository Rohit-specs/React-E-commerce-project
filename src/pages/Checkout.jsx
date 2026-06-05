import { Container, Row, Col, Form, Button, Table, Image, Accordion } from "react-bootstrap";
import BreadCrumbs from '../components/BreadCrumbs'
import { Link } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("cod");
  return (
    <>
      <BreadCrumbs />
      <div className="ltn__checkout-area mb-100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ltn__checkout-inner">
                <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                  <h5>
                    Returning customer?{" "}
                    <Link
                      className="ltn__secondary-color"
                      to="/login"
                      data-bs-toggle="collapse"
                    >
                      Click here to login
                    </Link>
                  </h5>

                  <div
                    id="ltn__returning-customer-login"
                    className="collapse ltn__checkout-single-content-info"
                  >
                    <div className="ltn_coupon-code-form ltn__form-box">
                      <p>Please login your account.</p>

                      <Form>
                        <Row>
                          <Col md={6}>
                            <div className="input-item input-item-name ltn__custom-icon">
                              <Form.Control
                                type="text"
                                name="ltn__name"
                                placeholder="Enter your name"
                              />
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="input-item input-item-email ltn__custom-icon">
                              <Form.Control
                                type="email"
                                name="ltn__email"
                                placeholder="Enter email address"
                              />
                            </div>
                          </Col>
                        </Row>

                        <Button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                          Login
                        </Button>

                        <label className="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Remember me
                        </label>

                        <p className="mt-30">
                          <Link to="/signup">Lost your password?</Link>
                        </p>
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="ltn__checkout-single-content ltn__coupon-code-wrap">
                  <h5>Have a coupon? <a class="ltn__secondary-color" href="#ltn__coupon-code" data-bs-toggle="collapse">Click here to enter your code</a></h5>
                  <div id="ltn__coupon-code" class="collapse ltn__checkout-single-content-info">
                    <div class="ltn__coupon-code-form">
                      <p>If you have a coupon code, please apply it below.</p>
                      <Form action="#" >
                        <Form.Control type="text" name="coupon-code" placeholder="Coupon code" />
                        <Button class="btn theme-btn-2 btn-effect-2 text-uppercase">Apply Coupon</Button>
                      </Form>
                    </div>
                  </div>
                </div>
                <div class="ltn__checkout-single-content mt-50">
                  <h4 class="title-2">Billing Details</h4>
                  <div class="ltn__checkout-single-content-info">
                    <Form action="#" >
                      <h6>Personal Information</h6>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="input-item input-item-name ltn__custom-icon">
                            <Form.Control type="text" name="ltn__name" placeholder="First name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-name ltn__custom-icon">
                            <Form.Control type="text" name="ltn__lastname" placeholder="Last name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-email ltn__custom-icon">
                            <Form.Control type="email" name="ltn__email" placeholder="email address" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-phone ltn__custom-icon">
                            <Form.Control type="text" name="ltn__phone" placeholder="phone number" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-website ltn__custom-icon">
                            <Form.Control type="text" name="ltn__company" placeholder="Company name (optional)" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-item input-item-website ltn__custom-icon">
                            <Form.Control type="text" name="ltn__phone" placeholder="Company address (optional)" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-4 col-md-6">
                          <h6>Country</h6>
                          <div class="input-item">
                            <Form.Select className="nice-select">
                              <option>Select Country</option>
                              <option>Australia</option>
                              <option>Canada</option>
                              <option>China</option>
                              <option>Morocco</option>
                              <option>Saudi Arabia</option>
                              <option>United Kingdom (UK)</option>
                              <option>United States (US)</option>
                            </Form.Select>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <h6>Address</h6>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="input-item">
                                <Form.Control type="text" placeholder="House number and street name" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="input-item">
                                <Form.Control type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <h6>Town / City</h6>
                          <div class="input-item">
                            <Form.Control type="text" placeholder="City" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <h6>State </h6>
                          <div class="input-item">
                            <Form.Control type="text" placeholder="State" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <h6>Zip</h6>
                          <div class="input-item">
                            <Form.Control type="text" placeholder="Zip" />
                          </div>
                        </div>
                      </div>
                      <p>
                        <label className="input-info-save mb-0">
                          <input type="checkbox" name="agree" /> Create an account?
                        </label>
                      </p>
                      <h6>Order Notes (optional)</h6>
                      <div class="input-item input-item-textarea ltn__custom-icon">
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="ltn__message"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                        />
                      </div>

                    </Form>
                  </div>
                </div>
              </div>
            </Col>
            <div class="col-lg-6">
              <div className="ltn__checkout-payment-method mt-50">
                <h4 className="title-2">Payment Method</h4>

                <Accordion activeKey={selectedPayment}>
                  <Accordion.Item
                    eventKey="check"
                    className="border rounded-0 mb-2"
                  >
                    <div
                      className="p-3 d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <Form.Check
                        type="radio"
                        name="paymentMethod"
                        checked={selectedPayment === "check"}
                        onChange={() => setSelectedPayment("check")}
                        className="me-2"
                      />

                      <span>Check payments</span>
                    </div>

                    <Accordion.Body>
                      Please send a check to Store Name, Store Street,
                      Store Town, Store State / County, Store Postcode.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="cod"
                    className="border rounded-0 mb-2"
                  >
                    <div
                      className="p-3 d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <Form.Check
                        type="radio"
                        name="paymentMethod"
                        checked={selectedPayment === "cod"}
                        onChange={() => setSelectedPayment("cod")}
                        className="me-2"
                      />

                      <span>Cash on delivery</span>
                    </div>

                    <Accordion.Body>
                      Pay with cash upon delivery.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="paypal"
                    className="border rounded-0"
                  >
                    <div
                      className="p-3 d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <Form.Check
                        type="radio"
                        name="paymentMethod"
                        checked={selectedPayment === "paypal"}
                        onChange={() => setSelectedPayment("paypal")}
                        className="me-2"
                      />

                      <span className="me-2">PayPal</span>

                      <Image
                        src="img/icons/payment-3.png"
                        alt="paypal"
                      />
                    </div>

                    <Accordion.Body>
                      Pay via PayPal; you can pay with your credit card
                      if you don't have a PayPal account.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <div className="ltn__payment-note mt-30 mb-30">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
                <button class="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Place order</button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="shoping-cart-total mt-50">
                <h4 class="title-2">Cart Totals</h4>
                <Table className="table">
                  <tbody>
                    <tr>
                      <td>
                        Brake Conversion Kit <strong>x 2</strong>
                      </td>
                      <td>$298.00</td>
                    </tr>

                    <tr>
                      <td>
                        OE Replica Wheels <strong>x 2</strong>
                      </td>
                      <td>$170.00</td>
                    </tr>

                    <tr>
                      <td>
                        Wheel Bearing Retainer <strong>x 2</strong>
                      </td>
                      <td>$150.00</td>
                    </tr>

                    <tr>
                      <td>Shipping and Handing</td>
                      <td>$15.00</td>
                    </tr>

                    <tr>
                      <td>Vat</td>
                      <td>$0.00</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>$633.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Row>
        </Container>
      </div >

    </>
  )
}

export default Checkout
