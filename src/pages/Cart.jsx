import BreadCrumbs from '../components/BreadCrumbs'
import { useState } from "react";
import { Container, Row, Col, Table, Form, Button, Image, } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Brake Conversion Kit",
            image: "img/product/1.png",
            price: 149,
            quantity: 2,
        },
        {
            id: 2,
            title: "OE Replica Wheels",
            image: "img/product/2.png",
            price: 85,
            quantity: 2,
        },
        {
            id: 3,
            title: "Wheel Bearing Retainer",
            image: "img/product/3.png",
            price: 75,
            quantity: 2,
        },
    ]);
    return (
        <>
            <BreadCrumbs />
            <div className="liton__shoping-cart-area mb-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="shoping-cart-inner">
                                <div className="shoping-cart-table">
                                    <Table responsive>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td
                                                        className="cart-product-remove"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        ×
                                                    </td>

                                                    <td className="cart-product-image">
                                                        <Link to={`/product-details/${item.id}`}>
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                width={80}
                                                            />
                                                        </Link>
                                                    </td>

                                                    <td className="cart-product-info">
                                                        <h4>
                                                            <Link to={`/product-details/${item.id}`}>
                                                                {item.title}
                                                            </Link>
                                                        </h4>
                                                    </td>

                                                    <td className="cart-product-price">
                                                        ${item.price.toFixed(2)}
                                                    </td>

                                                    <td className="cart-product-quantity">
                                                        <Form.Control
                                                            type="number"
                                                            min="1"
                                                            value={item.quantity}
                                                            style={{ width: "90px" }}
                                                            onChange={(e) =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    e.target.value
                                                                )
                                                            }
                                                        />
                                                    </td>

                                                    <td className="cart-product-subtotal">
                                                        $
                                                        {(
                                                            item.price * item.quantity
                                                        ).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}

                                            <tr className="cart-coupon-row">
                                                <td colSpan={6}>
                                                    <div className="d-flex gap-2">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Coupon code"
                                                        />

                                                        <Button
                                                            variant="success"
                                                        >
                                                            Apply Coupon
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="shoping-cart-total mt-5">
                                    <h4>Cart Totals</h4>

                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Cart Subtotal</td>
                                                <td>${subtotal.toFixed(2)}</td>
                                            </tr>

                                            <tr>
                                                <td>Shipping and Handling</td>
                                                <td>${shipping.toFixed(2)}</td>
                                            </tr>

                                            <tr>
                                                <td>VAT</td>
                                                <td>$0.00</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>Order Total</strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        ${total.toFixed(2)}
                                                    </strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className="text-end">
                                        <Button
                                            as={Link}
                                            to="/checkout"
                                            variant="success"
                                        >
                                            Proceed to Checkout
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Cart
