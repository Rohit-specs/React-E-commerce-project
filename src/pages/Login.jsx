import { Col, Container, Form, Row } from "react-bootstrap"
import BreadCrumbs from "../components/BreadCrumbs"
import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { LoginSchema } from "../utils/FormSchema"
import { getAllUsers } from "../api/services"
import { toast } from "react-toastify"

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(LoginSchema),
    })
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const { email, password } = data
            const res = await getAllUsers()
            const user = res.data.find(
                (item) => item.email === email
            )

            if (!user) {
                toast.error("User not found")
                return
            }

            if (user.password !== password) {
                toast.error("Incorrect password")
                return
            } 
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("isActive",true)
            reset()
            toast.success("Login Successful")
            navigate("/")


        } catch (error) {
toast.error("Something went wrong")
            console.log(error)
        }

    };
    return (
        <>
            <BreadCrumbs />
            <div className="ltn__login-area pb-85">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="section-title-area text-center">
                                <h1>Sign In <br />To  Your Account</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Sit aliquid,  Non distinctio vel iste.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="account-login-inner">
                                <Form
                                    className="ltn__form-box contact-form-box"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Email*"
                                        {...register("email")}
                                    />
                                    <p className="text-danger">
                                        {errors.email?.message}
                                    </p>

                                    <Form.Control
                                        type="password"
                                        placeholder="Password*"
                                        {...register("password")}
                                    />
                                    <p className="text-danger">
                                        {errors.password?.message}
                                    </p>

                                    <div className="btn-wrapper mt-0">
                                        <button
                                            className="theme-btn-1 btn btn-block"
                                            type="submit"
                                        >
                                            SIGN IN
                                        </button>
                                    </div>

                                    <div className="go-to-btn mt-20">
                                        <Link to="/signup">
                                            <small>FORGOTTEN YOUR PASSWORD?</small>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="account-create text-center pt-50">
                                <h4>DON'T HAVE AN ACCOUNT?</h4>
                                <p>Add items to your wishlistget personalised recommendations <br />
                                    check out more quickly track your orders register</p>
                                <div className="btn-wrapper">
                                    <Link to="/signup" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login