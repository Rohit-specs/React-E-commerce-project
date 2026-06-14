import React, { useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { Tab, Nav, Table, Row, Col, Form, Button, Container, } from "react-bootstrap";
import { ArrowDown, BoxArrowRight, File, House, Map, Person } from 'react-bootstrap-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AccountSchema } from '../utils/FormSchema'
import { Link } from 'react-router-dom';
import { getAllUsers, updateUserById } from '../api/services';
import { toast } from 'react-toastify';

const MyAccount = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const fullName = `${user?.firstname || ""} ${user?.lastname || ""}`.trim();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(AccountSchema),
        defaultValues: {
            firstname: user?.firstname || "",
            lastname: user?.lastname || "",
            email: user?.email || "",
            displayName: fullName
        }
    });
    const onSubmit = async (data) => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const usersRes = await getAllUsers();
            const existingUser = usersRes.data.find(
                (u) =>
                    u.email.toLowerCase() === data.email.toLowerCase() &&
                    u.id !== user.id
            );
            if (existingUser) {
                toast.error("Email already exists");
                return;
            }
            const updatedUser = {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
            };
            if (data.newPassword) {
                updatedUser.password = data.newPassword;
            }
            const res = await updateUserById(user.id, updatedUser);
            localStorage.setItem("user", JSON.stringify(res.data));
            toast.success("Profile updated successfully");
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    };
    const logoutHandler = () => {
        localStorage.setItem("isActive", false)
        localStorage.removeItem("user")
    }
    return (
        <>
            <BreadCrumbs />
            <div className="liton__wishlist-area pb-50">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="ltn__product-tab-area">
                                <div className="container">
                                    <Tab.Container defaultActiveKey="dashboard">
                                        <Row>
                                            <Col lg={4}>
                                                <div className="ltn__tab-menu-list mb-50">
                                                    <Nav  >
                                                        <Nav.Link className='ltn__secondary-color d-flex align-items-center justify-content-between' eventKey="dashboard">
                                                            Dashboard <House />
                                                        </Nav.Link>

                                                        <Nav.Link className='ltn__secondary-color d-flex align-items-center justify-content-between' eventKey="orders">
                                                            Orders <File />
                                                        </Nav.Link>

                                                        <Nav.Link className='ltn__secondary-color d-flex align-items-center justify-content-between' eventKey="downloads">
                                                            Downloads <ArrowDown />
                                                        </Nav.Link>

                                                        <Nav.Link className='ltn__secondary-color d-flex align-items-center justify-content-between' eventKey="address">
                                                            Address <Map />
                                                        </Nav.Link>

                                                        <Nav.Link className='ltn__secondary-color d-flex align-items-center justify-content-between' eventKey="account">
                                                            Account Details <Person />
                                                        </Nav.Link>

                                                        <Nav.Link onClick={logoutHandler} className='ltn__secondary-color d-flex align-items-center justify-content-between' href="/login">
                                                            Logout <BoxArrowRight />
                                                        </Nav.Link>
                                                    </Nav>
                                                </div>
                                            </Col>

                                            <Col lg={8}>
                                                <Tab.Content>

                                                    <Tab.Pane eventKey="dashboard">
                                                        <div className="ltn__myaccount-tab-content-inner">
                                                            <p>
                                                                Hello <strong>{fullName}</strong> (not{" "}
                                                                <strong>{fullName}</strong>?{" "}
                                                                <small>
                                                                    <Link to="/login">Log out</Link>
                                                                </small>
                                                                )
                                                            </p>

                                                            <p>
                                                                From your account dashboard you can view your{" "}
                                                                <span>recent orders</span>, manage your{" "}
                                                                <span>shipping and billing addresses</span>, and{" "}
                                                                <span>
                                                                    edit your password and account details
                                                                </span>
                                                                .
                                                            </p>
                                                        </div>
                                                    </Tab.Pane>


                                                    <Tab.Pane eventKey="orders">
                                                        <div className="ltn__myaccount-tab-content-inner">
                                                            <div className="table-responsive">
                                                                <Table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order</th>
                                                                            <th>Date</th>
                                                                            <th>Status</th>
                                                                            <th>Total</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Jun 22, 2019</td>
                                                                            <td>Pending</td>
                                                                            <td>$3000</td>
                                                                            <td>
                                                                                <a href="/cart">View</a>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>2</td>
                                                                            <td>Nov 22, 2019</td>
                                                                            <td>Approved</td>
                                                                            <td>$200</td>
                                                                            <td>
                                                                                <a href="/cart">View</a>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>3</td>
                                                                            <td>Jan 12, 2020</td>
                                                                            <td>On Hold</td>
                                                                            <td>$990</td>
                                                                            <td>
                                                                                <a href="/cart">View</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>


                                                    <Tab.Pane eventKey="downloads">
                                                        <div className="ltn__myaccount-tab-content-inner">
                                                            <div className="table-responsive">
                                                                <Table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Product</th>
                                                                            <th>Date</th>
                                                                            <th>Expire</th>
                                                                            <th>Download</th>
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                Carsafe - Car Service PSD Template
                                                                            </td>
                                                                            <td>Nov 22, 2020</td>
                                                                            <td>Yes</td>
                                                                            <td>
                                                                                <a href="#">
                                                                                    <i className="far fa-arrow-to-bottom me-1"></i>
                                                                                    Download File
                                                                                </a>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                Carsafe - Car Service HTML Template
                                                                            </td>
                                                                            <td>Nov 10, 2020</td>
                                                                            <td>Yes</td>
                                                                            <td>
                                                                                <a href="#">
                                                                                    <i className="far fa-arrow-to-bottom me-1"></i>
                                                                                    Download File
                                                                                </a>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                Carsafe - Car Service WordPress Theme
                                                                            </td>
                                                                            <td>Nov 12, 2020</td>
                                                                            <td>Yes</td>
                                                                            <td>
                                                                                <a href="#">
                                                                                    <i className="far fa-arrow-to-bottom me-1"></i>
                                                                                    Download File
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>


                                                    <Tab.Pane eventKey="address">
                                                        <div className="ltn__myaccount-tab-content-inner">
                                                            <p>
                                                                The following addresses will be used on the
                                                                checkout page by default.
                                                            </p>

                                                            <Row>
                                                                <Col md={6} xs={12} className="learts-mb-30">
                                                                    <h4>
                                                                        Billing Address{" "}
                                                                        <small>
                                                                            <a href="#">edit</a>
                                                                        </small>
                                                                    </h4>

                                                                    <address>
                                                                        <p>
                                                                            <strong>Alex Tuntuni</strong>
                                                                        </p>

                                                                        <p>
                                                                            1355 Market St, Suite 900 <br />
                                                                            San Francisco, CA 94103
                                                                        </p>

                                                                        <p>Mobile: (123) 456-7890</p>
                                                                    </address>
                                                                </Col>

                                                                <Col md={6} xs={12} className="learts-mb-30">
                                                                    <h4>
                                                                        Shipping Address{" "}
                                                                        <small>
                                                                            <a href="#">edit</a>
                                                                        </small>
                                                                    </h4>

                                                                    <address>
                                                                        <p>
                                                                            <strong>Alex Tuntuni</strong>
                                                                        </p>

                                                                        <p>
                                                                            1355 Market St, Suite 900 <br />
                                                                            San Francisco, CA 94103
                                                                        </p>

                                                                        <p>Mobile: (123) 456-7890</p>
                                                                    </address>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Tab.Pane>


                                                    <Tab.Pane eventKey="account">
                                                        <div className="ltn__myaccount-tab-content-inner mb-50">
                                                            <p>
                                                                The following addresses will be used on the
                                                                checkout page by default.
                                                            </p>

                                                            <div className="ltn__form-box">
                                                                <Form onSubmit={handleSubmit(onSubmit)}>
                                                                    <Row className="mb-50">
                                                                        <Col md={6}>
                                                                            <Form.Label>First name:</Form.Label>
                                                                            <Form.Control
                                                                                type="text"
                                                                                {...register("firstname")}
                                                                            />
                                                                            <p className="text-danger">{errors.firstname?.message}</p>
                                                                        </Col>

                                                                        <Col md={6}>
                                                                            <Form.Label>Last name:</Form.Label>
                                                                            <Form.Control
                                                                                type="text"
                                                                                {...register("lastname")}
                                                                            />
                                                                            <p className="text-danger">{errors.lastname?.message}</p>
                                                                        </Col>

                                                                        <Col md={6}>
                                                                            <Form.Label>Display Name:</Form.Label>
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Ethan"
                                                                                {...register("displayName")}
                                                                            />
                                                                            <p className="text-danger">{errors.displayName?.message}</p>
                                                                        </Col>

                                                                        <Col md={6}>
                                                                            <Form.Label>Display Email:</Form.Label>
                                                                            <Form.Control
                                                                                type="email"
                                                                                placeholder="example@example.com"
                                                                                {...register("email")}
                                                                            />
                                                                            <p className="text-danger">{errors.email?.message}</p>
                                                                        </Col>
                                                                    </Row>

                                                                    <fieldset>
                                                                        <legend>Password change</legend>

                                                                        <Form.Group className="mb-3">
                                                                            <Form.Label>
                                                                                Current password (leave blank to leave unchanged):
                                                                            </Form.Label>

                                                                            <Form.Control
                                                                                type="password"
                                                                                {...register("currentPassword")}
                                                                            />

                                                                            <p className="text-danger">
                                                                                {errors.currentPassword?.message}
                                                                            </p>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-3">
                                                                            <Form.Label>
                                                                                New password (leave blank to leave unchanged):
                                                                            </Form.Label>

                                                                            <Form.Control
                                                                                type="password"
                                                                                {...register("newPassword")}
                                                                            />

                                                                            <p className="text-danger">
                                                                                {errors.newPassword?.message}
                                                                            </p>
                                                                        </Form.Group>

                                                                        <Form.Group className="mb-3">
                                                                            <Form.Label>
                                                                                Confirm new password:
                                                                            </Form.Label>

                                                                            <Form.Control
                                                                                type="password"
                                                                                {...register("confirmPassword")}
                                                                            />

                                                                            <p className="text-danger">
                                                                                {errors.confirmPassword?.message}
                                                                            </p>
                                                                        </Form.Group>
                                                                    </fieldset>

                                                                    <div className="btn-wrapper">
                                                                        <Button
                                                                            type="submit"
                                                                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                                        >
                                                                            Save Changes
                                                                        </Button>
                                                                    </div>
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MyAccount