import { Col, Container, Form, Row } from "react-bootstrap"
import BreadCrumbs from "../components/BreadCrumbs"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
    <BreadCrumbs/>
      <div className="ltn__login-area pb-85">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="section-title-area text-center">
                        <h1>Sign In <br/>To  Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className="account-login-inner">
                        <Form action="#" className="ltn__form-box contact-form-box">
                            <Form.Control type="text" name="email" placeholder="Email*"/>
                            <Form.Control type="password" name="password" placeholder="Password*"/>
                            <div className="btn-wrapper mt-0">
                                <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                            </div>
                            <div className="go-to-btn mt-20">
                                <Link to="/signup"><small>FORGOTTEN YOUR PASSWORD?</small></Link>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="account-create text-center pt-50">
                        <h4>DON'T HAVE AN ACCOUNT?</h4>
                        <p>Add items to your wishlistget personalised recommendations <br/>
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