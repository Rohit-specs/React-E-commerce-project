import { Container, Row, Col, Table, Image } from "react-bootstrap";
import BreadCrumbs from '../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import { useState } from "react";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
            price: 9.99,
            stock: 99
        },
        {
            id: 2,
            title: "Eyeshadow Palette with Mirror",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
            price: 19.99,
            stock: 45
        },
        {
            id: 3,
            title: "Powder Canister",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
            price: 14.99,
            stock: 20
        }
    ]);
    return (
        <>
            <BreadCrumbs />
            <div class="liton__wishlist-area mb-85">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div class="shoping-cart-inner">
                                <div class="shoping-cart-table table-responsive">
                                    <Table class="table">

                                        <tbody>
                                            {wishlistItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="cart-product-remove">x</td>

                                                    <td className="cart-product-image">
                                                        <Link to={`/product-details/${item.id}`}>
                                                            <Image src={item.thumbnail} alt={item.title} />
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
                                                        ${item.price}
                                                    </td>

                                                    <td className="cart-product-stock">
                                                        {item.stock > 0 ? "In Stock" : "Out of Stock"}
                                                    </td>

                                                    <td className="cart-product-add-cart">
                                                        <a
                                                            className="submit-button-1"
                                                            href="#"
                                                            title="Add to Cart"
                                                        >
                                                            Add to Cart
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Wishlist
