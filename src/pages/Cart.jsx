import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { Container, Row, Col, Table, Form, Button, Image, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, applyCoupon, increament, decrement } from "../store/slices/CartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();

  const {
    cartItems,
    cartTotal,
    shippingCost,
    tax,
    orderTotal,
    discountPercent,
    discoutAmount,
  } = useSelector((state) => state.cart);

  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode));

    if (
      couponCode.toUpperCase() === "DIS5" ||
      couponCode.toUpperCase() === "DIS10"
    ) {
      toast.success("Coupon applied successfully");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  return (
    <>
      <BreadCrumbs />

      <div className="liton__shoping-cart-area mb-100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table">
                  {cartItems.length > 0 ? (
                    <>

                      <Row className="cart-header d-none d-lg-flex fw-bold border-bottom pb-3 mb-3">
                        <Col lg={1}></Col>
                        <Col lg={2}>Image</Col>
                        <Col lg={3}>Product</Col>
                        <Col lg={2}>Price</Col>
                        <Col lg={2}>Quantity</Col>
                        <Col lg={2}>Subtotal</Col>
                      </Row>

                      {cartItems.map((item) => (
                        <Row
                          key={item.id}
                          className="cart-item align-items-center border-bottom py-3"
                        >
                          <Col lg={1} xs={12}>
                            <span
                              className="cart-product-remove"
                              onClick={() => {
                                dispatch(removeFromCart(item.id));
                                toast.success("Item removed from cart");
                              }}
                            >
                              x
                            </span>
                          </Col>

                          <Col lg={2} xs={4}>
                            <Link to={`/product-details/${item.id}`}>
                              <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fluid
                                className="cart-product-img"
                              />
                            </Link>
                          </Col>

                          <Col lg={3} xs={8}>
                            <h6 className="mb-0">
                              <Link to={`/product-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </h6>
                          </Col>

                          <Col lg={1} xs={6} className="mt-3 mt-lg-0">
                            <span className="d-lg-none fw-bold">Price: </span>
                            ${item.price}
                          </Col>

                          <Col lg={3} xs={6} className="mt-3 mt-lg-0">
                            <div className="quantity-box">
                         
                              <button
                                type="button"
className="btn btn-outline-dark fs-3"
                                onClick={() => {
                                  dispatch(decrement({ id: item.id }))
                                }
                                }
                              >
                                -
                              </button>

                              <Form.Control
                                type="text"
                                value={item.quantity}
                                className="fs-6 text-center w-50"
                                onChange={(e) =>{
                                  dispatch(
                                    updateQuantity({
                                      id: item.id,
                                      quantity: Number(e.target.value),
                                    })
                                  )
                                  toast.success("Quantity updated sucessfully")
                                }}
                              />

                              <button
                                type="button"
                                className="btn btn-outline-dark fs-3"
                                onClick={() => {
                                  dispatch(increament({ id: item.id }))
                                }
                                }
                              >
                                +
                              </button>
                            </div>
                          </Col>

                          <Col lg={2} xs={12} className="mt-3 mt-lg-0">
                            <span className="d-lg-none fw-bold">Subtotal: </span>
                            ${(item.price * item.quantity).toFixed(2)}
                          </Col>
                        </Row>
                      ))}

                      <Row className="mt-4">
                        <Col lg={3}>
                          <div className="cart-coupon">
                            <Form.Control
                              type="text"
                              name="quantity"

                              placeholder="Coupon code"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                            />
                          </div>
                        </Col>

                        <Col lg={3} className="mt-3 mt-lg-0">
                          <Button

                            className="theme-btn-2 btn-effect-2 w-100"
                            onClick={handleApplyCoupon}

                          >
                            Apply Coupon
                          </Button>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <Row>
                      <Col className="text-center py-5">
                        <h4>Your Cart is Empty</h4>

                        <Link to="/shop" className="btn theme-btn-1 mt-3">
                          Continue Shopping
                        </Link>
                      </Col>
                    </Row>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="shoping-cart-total mt-50">
                    <h4>Cart Totals</h4>

                    <Table className="table">
                      <tbody>
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

                    <div className="btn-wrapper text-right">
                      <Link
                        to="/checkout"
                        className="theme-btn-1 btn btn-effect-1"
                      >
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cart;