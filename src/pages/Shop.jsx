import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
import { Cart, Grid, Heart, Search, List, ArrowRight } from 'react-bootstrap-icons'
import { getAllProducts, getAllCategories, getProductsByCategory } from './../api/services'
import { useParams } from "react-router-dom";
import ProductCard from '../components/ProductCard'

const Shop = () => {
  const [productsData, setProductsData] = useState([])
  const [categories, setCategories] = useState([]);

  const { category } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProducts()
        setProductsData(res.data.products)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res;

        if (category) {
          res = await getProductsByCategory(category);
          setProductsData(res.data.products);
        } else {
          res = await getAllProducts();
          setProductsData(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [category]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();

        // console.log("Categories:", res.data);

        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      {/* <pre>
        {JSON.stringify(categories, null, 2)}
      </pre> */}
      <BreadCrumbs />
      <div className="ltn__product-area ">
        <Container>
          <Row>
            <Col lg={9} className="order-lg-2 mb-100">
              {/* <div className="ltn__shop-options">
                <ul>
                  <li>
                    <div className="showing-product-number text-right">
                      <span>Showing 9 of 20 results</span>
                    </div>
                  </li>

                </ul>
              </div> */}
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_product_grid">
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <Row>
                      {productsData?.map((val) => {
                        return (<Col key={val.id} xl={4} sm={6} xs={12}>
                          <ProductCard product={val}/>
                          {/* <div className="ltn__product-item text-center">
                            <div className="product-img">
                              <Link to={`/product-details/${val.id}`}><Image src={val.thumbnail} alt={val.title} /></Link>
                              <div className="product-badge">
                                <ul>
                                  <li className="badge-1">{Math.round(val.discountPercentage)}%</li>
                                </ul>
                              </div>
                              <div className="product-hover-action product-hover-action-2">
                                <ul>
                                  <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                      <Search />
                                    </a>
                                  </li>
                                  <li className="add-to-cart">
                                    <a href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                      <span className="cart-text d-none d-xl-block">Add to Cart</span>
                                      <span className="d-block d-xl-none"><Cart /></span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                      <Heart />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <h2 className="product-title"><Link to={`/product-details/${val.id}`}>{val.title}</Link></h2>
                              <div className="product-price">
                                <span>${val.price}</span>
                                <del>${(val.price / (1 - (val.discountPercentage / 100))).toFixed(2)}</del>
                              </div>
                            </div>
                          </div> */}
                        </Col>)
                      })}

                    </Row>
                  </div>
                </div>
              </div>

              {/* <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination ltn__pagination-2">
                  <ul>
                    <li><Link to="#"><i className="icon-arrow-left"></i></Link></li>
                    <li><Link to="#">1</Link></li>
                    <li className="active"><Link to="#">2</Link></li>
                    <li><Link to="#">3</Link></li>
                    <li><Link to="#">...</Link></li>
                    <li><Link to="#"><i className="icon-arrow-right"></i></Link></li>
                  </ul>
                </div>
              </div> */}
            </Col>
            <Col lg={3} className="mb-100">
              <aside className="sidebar ltn__shop-sidebar">
                {/* <div className="widget ltn__price-filter-widget">
                  <h4 className="ltn__widget-title">Price</h4>
                  <div className="price_filter">
                    <div className="price_slider_amount">
                      <input type="submit" value="Your range:" />
                      <input type="text" className="amount" name="price" placeholder="Add Your Price" />
                    </div>
                    <div className="slider-range"></div>
                  </div>
                </div> */}
                <div className="widget ltn__menu-widget">
                  <h4 className="ltn__widget-title">Categories</h4>
                  <ul>

                    {categories.map((category) => (
                      <li key={category.slug}>
                        <NavLink
                          to={`/shop/${category.slug}`}
                          className={({ isActive }) =>isActive ? "active-category" : ""}
                        >
                          <ArrowRight className='me-3'/>
                          {category.name}
                        </NavLink></li>
                    ))}
                  </ul>
                </div>


              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Shop
