import { Col, Container, Form, Row } from 'react-bootstrap'
import BreadCrumbs from '../components/BreadCrumbs'
import { Link, useNavigate } from 'react-router-dom'
import { SignupSchema } from '../utils/FormSchema'
import { register } from 'swiper/element'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { createUser, getAllUsers } from '../api/services'
import { toast } from 'react-toastify'

const Signup = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(SignupSchema),
    })

    const onSubmit = async (data) => {

        try {
            const { firstname, lastname, email, password, } = data
            const usersRes = await getAllUsers();

            const existingUser = usersRes.data.find(
                (user) => user.email === email
            );

            if (existingUser) {
                toast.error("Email already registered");
                return;
            }

            const userData = {
                firstname,
                lastname,
                email,
                password,
                avatar: "https://avatars.githubusercontent.com/u/88480178",
            };

            await createUser(userData);
            toast.success("Account Created Successfully");
            reset()
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }
    return (
        <>
            <BreadCrumbs />
            <div className="ltn__login-area pb-90">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="section-title-area text-center">
                                <h1>Register <br />Your Account</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Sit aliquid,  Non distinctio vel iste.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="offset-lg-3">
                            <div className="account-login-inner">
                                <Form onSubmit={handleSubmit(onSubmit)} className="ltn__form-box contact-form-box">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        {...register("firstname")}
                                    />
                                    <small className="text-danger">{errors.firstname?.message}</small>

                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        {...register("lastname")}
                                    />
                                    <small className="text-danger">{errors.lastname?.message}</small>

                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        {...register("email")}
                                    />
                                    <small className="text-danger">{errors.email?.message}</small>

                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register("password")}
                                    />
                                    <small className="text-danger">{errors.password?.message}</small>

                                    <Form.Check
                                        type="checkbox"
                                        label='By clicking "create account", I consent to the privacy policy.'
                                        {...register("terms_and_condition")}
                                    />
                                    <small className="text-danger">
                                        {errors.terms_and_condition?.message}
                                    </small>


                                    <div className="btn-wrapper">
                                        <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                                    </div>
                                </Form>
                                <div className="by-agree text-center">
                                    <p>By creating an account, you agree to our:</p>
                                    <p><a href="#">TERMS OF CONDITIONS  &nbsp &nbsp | &nbsp &nbsp  PRIVACY POLICY</a></p>
                                    <div className="go-to-btn mt-50">
                                        <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
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

export default Signup