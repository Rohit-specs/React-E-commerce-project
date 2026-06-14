import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart, Heart, Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../store/slices/WishlistSlice";
import { addToCart } from "../store/slices/CartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();


    const handleAddToCart = () => {
        if (product.stock <= 0) {
            toast.error("Product is out of stock");
            return;
        }

        dispatch(addToCart(product));
        toast.success("Product added to cart");
    };

    return (

        <div className="ltn__product-item text-center">
            <div className="product-img">
                <Link to={`/product-details/${product.id}`}>
                    <Image src={product.thumbnail} alt={product.title} />
                </Link>

                <div className="product-badge">
                    <ul>
                        <li className="badge-1">
                            {Math.round(product.discountPercentage)}%
                        </li>
                    </ul>
                </div>

                <div className="product-hover-action product-hover-action-2">
                    <ul>
                        <li>
                            <a
                                href="#"
                                title="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#quick_view_modal"
                            >
                                <Search />
                            </a>
                        </li>

                        <li className="add-to-cart">
                            <a
                                href="#"
                                title="Add to Cart"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToCart();
                                }}
                            >
                                <span className="cart-text d-none d-xl-block">
                                    Add to Cart
                                </span>
                                <span className="d-block d-xl-none">
                                    <Cart />
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                title="Add To Wishlist"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addToWishlist(product));
                                }}
                            >
                                <Heart />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="product-info">
                <h2 className="product-title">
                    <Link to={`/product-details/${product.id}`}>
                        {product.title}
                    </Link>
                </h2>

                <div className="product-price">
                    <span>${product.price}</span>
                    <del>
                        $
                        {(
                            product.price /
                            (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                    </del>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;