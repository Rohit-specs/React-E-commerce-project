import { Container, Row, Col, Form, Button, Table, Image, Accordion } from "react-bootstrap";
import BreadCrumbs from '../components/BreadCrumbs'
import { Link, resolvePath } from "react-router-dom";
import { useEffect, useState } from "react";
import { Paypal } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutSchema } from "../utils/FormSchema";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice, clearCart } from "../store/slices/CartSlice";
import { createOrder, getOrderByUserId, getUserById } from "../api/services";
import { toast } from "react-toastify";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const isLoggedIn = Boolean(localStorage.getItem("isActive"))
  const userData = JSON.parse(localStorage.getItem("user"))
  const [orderData, setOrderData] = useState([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(CheckoutSchema), defaultValues: {
      firstname: userData?.firstname || "",
      lastname: userData?.lastname || "",
      email: userData?.email || ""
    }
  })
  // useEffect(() => {
  //   const fetchOrderData = async() => {
  //     const res = await getOrderByUserId(userData.id)
  //     setOrderData(Array.isArray(res.data)? res.data: [res.data])
  //   }
  //   fetchOrderData()
  //   if (!orderData) return;
  //   else{
  //     const latestOrder = orderData[orderData.length - 1];
  //     reset({
  //     firstname: userData?.firstname || "",
  //     lastname: userData?.lastname || "",
  //     email: userData?.email || "",

  //     country: latestOrder?.country || "",
  //     state: latestOrder?.state || "",
  //     city: latestOrder?.city || "",
  //     zip: latestOrder?.zip || "",

  //     address1: latestOrder?.address || "",
  //   });
  //   }

   

  // }, [userData])
 useEffect(() => {
  const fetchOrderData = async () => {
    try {
      const res = await getOrderByUserId(userData.id)

      setOrderData(
        Array.isArray(res.data)
          ? res.data
          : [res.data]
      )
    } catch (error) {
      console.log(error)
    }
  }

  if (userData?.id) {
    fetchOrderData()
  }

}, [userData?.id])

useEffect(() => {
  if (!orderData?.length) return
  const latestOrder = orderData[orderData.length - 1]
  reset({
    firstname: userData?.firstname || "",
    lastname: userData?.lastname || "",
    email: userData?.email || "",
    country: latestOrder.country || "",
    state: latestOrder.state || "",
    city: latestOrder.city || "",
    zip: latestOrder.zip || "",
    address1: latestOrder.address || ""
  })
}, [orderData, reset ])
  const dispatch = useDispatch()
  const {
    cartItems,
    cartTotal,
    shippingCost,
    tax,
    orderTotal,
    discountPercent,
    discoutAmount,
  } = useSelector((state) => state.cart)

  const submitHandler = async (data) => {

    if (!isLoggedIn) {
      toast.info("Please Login Before Checkout")
      return
    }
    if (cartItems.length === 0) {
      toast.info("Your Cart is Empty")
      return
    }
    const payload = {
      createdAt: new Date().toISOString(),
      email: data.email,
      orders: cartItems,
      userId: userData.id,
      orderTotal: cartTotal,
      country: data.country,
      state: data.state,
      city: data.city,
      zip: data.zip,
      address: `${data.address1}${data.address2 ? `, ${data.address2}` : ""}`
    }
    await createOrder(payload)
    toast.success("Order Placed Successfully")
    dispatch(clearCart())
  }
  return (
    <>
      {/* {JSON.stringify(orderData,null,2)} */}
      <BreadCrumbs />
      <div className="ltn__checkout-area mb-100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ltn__checkout-inner">
                {!isLoggedIn && <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
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
                </div>}

                <div className="ltn__checkout-single-content mt-50">
                  <h4 className="title-2">Billing Details</h4>
                  <div className="ltn__checkout-single-content-info">
                    <Form action="#" >
                      <h6>Personal Information</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item input-item-name">
                            <Form.Control type="text" name="firstname" placeholder="First name" {...register("firstname")} />
                            <small className="text-danger">{errors?.firstname?.message}</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-name">
                            <Form.Control type="text" name="lastname" placeholder="Last name" {...register("lastname")} />
                            <small className="text-danger">{errors?.lastname?.message}</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-email">
                            <Form.Control type="email" name="email" placeholder="email address" {...register("email")} />
                            <small className="text-danger">{errors?.email?.message}</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-phone">
                            <Form.Control type="text" name="phonenumber" placeholder="phone number" {...register("phonenumber")} />
                            <small className="text-danger">{errors?.phonenumber?.message}</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-website">
                            <Form.Control type="text" name="company" placeholder="Company name (optional)" {...register("company")} />
                            <small className="text-danger">{errors?.company?.message}</small>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-website">
                            <Form.Control type="text" name="company address" placeholder="Company address (optional)" {...register("companyAddress")} />
                            <small className="text-danger">{errors?.companyAddress?.message}</small>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <h6>Country</h6>
                          <div className="input-item">
                            <Form.Select className="nice-select" {...register("country")}>
                              <option>Select Country</option>
                              <option>Australia</option>
                              <option>Canada</option>
                              <option>China</option>
                              <option>Morocco</option>
                              <option>Saudi Arabia</option>
                              <option>United Kingdom (UK)</option>
                              <option>United States (US)</option>
                            </Form.Select>
                            <small className="text-danger">{errors?.country?.message}</small>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <h6>Address</h6>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item">
                                <Form.Control type="text" placeholder="House number and street name" {...register("address1")} />
                                <small className="text-danger">{errors?.address1?.message}</small>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item">
                                <Form.Control type="text" placeholder="Apartment, suite, unit etc. (optional)" {...register("address2")} />
                                <small className="text-danger">{errors?.address2?.message}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>Town / City</h6>
                          <div className="input-item">
                            <Form.Control type="text" placeholder="City" {...register("city")} />
                            <small className="text-danger">
                              {errors?.city?.message}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>State </h6>
                          <div className="input-item">
                            <Form.Control type="text" placeholder="State" {...register("state")} />
                            <small className="text-danger">
                              {errors?.state?.message}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>Zip</h6>
                          <div className="input-item">
                            <Form.Control type="text" placeholder="Zip" {...register("zip")} />
                            <small className="text-danger">
                              {errors?.zip?.message}
                            </small>
                          </div>
                        </div>
                      </div>
                      <h6>Order Notes (optional)</h6>
                      <div className="input-item input-item-textarea">
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="ltn__message"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          {...register("orderNotes")}
                        />
                      </div>

                    </Form>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-lg-6">
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

                      <Paypal />
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
                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" onClick={handleSubmit(submitHandler)} type="submit">Place order</button>
              </div>
            </div>
            <div className="col-lg-6">
              {cartItems.length > 0 &&
                <div className="shoping-cart-total mt-50">
                  <h4>Cart Totals</h4>

                  <Table className="table">
                    <tbody>
                      {cartItems.map((item) => {
                        return (<tr key={item.id}>
                          <td>
                            {item.title} <strong>x {item.quantity}</strong>
                          </td>
                          <td>${item.price * item.quantity}</td>
                        </tr>)
                      })}
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>${cartTotal.toFixed(2)}</td>
                      </tr>

                      <tr>
                        <td>Shipping and Handling</td>
                        <td>${shippingCost.toFixed(2)}</td>
                      </tr>

                      <tr>
                        <td>Discount ({discountPercent}%)</td>
                        <td>
                          -${discoutAmount.toFixed(2)}
                        </td>
                      </tr>

                      <tr>
                        <td>Tax ({tax}%)</td>
                        <td>
                          $
                          {(
                            ((cartTotal - discoutAmount) *
                              tax) /
                            100
                          ).toFixed(2)}
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>
                            ${orderTotal.toFixed(2)}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </Table>


                </div>
              }
            </div>
          </Row>
        </Container>
      </div >

    </>
  )
}

export default Checkout
