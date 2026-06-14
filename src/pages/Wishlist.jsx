import { Container, Row, Col, Table, Image } from "react-bootstrap";
import BreadCrumbs from '../components/BreadCrumbs'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/slices/WishlistSlice";
import { addToCart } from "../store/slices/CartSlice";
import { toast } from "react-toastify";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()
  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
    toast.success("Product moved to cart");
  };
  return (
    <>
      <BreadCrumbs />
      <div className="liton__wishlist-area mb-85">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">

                  {wishlistItems.length === 0 ? (
                    <div className="text-center py-5">
                      <h3>Your Wishlist is Empty</h3>
                      <p>Add some products to your wishlist and they will appear here.</p>

                      <Link
                        to="/shop"
                        className="theme-btn-1 btn btn-effect-1 mt-3"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    <Table className="table">
                      <tbody>
                        {wishlistItems.map((item) => (
                          <tr key={item.id}>
                            <td
                              className="cart-product-remove"
                              onClick={() =>
                                dispatch(removeFromWishlist(item.id))
                              }
                              style={{ cursor: "pointer" }}
                            >
                              x
                            </td>

                            <td className="cart-product-image">
                              <Link to={`/product-details/${item.id}`}>
                                <Image
                                  src={item.thumbnail}
                                  alt={item.title}
                                  fluid
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
                              ${item.price}
                            </td>

                            <td className="cart-product-stock">
                              {item.stock > 0 ? (
                                <span className="text-success">
                                  In Stock
                                </span>
                              ) : (
                                <span className="text-danger">
                                  Out of Stock
                                </span>
                              )}
                            </td>

                            <td className="cart-product-add-cart">
                              <a
                                href="#"
                                className="submit-button-1"
                                title="Move To Cart"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleMoveToCart(item);
                                }}
                              >
                                Move to Cart
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}

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
