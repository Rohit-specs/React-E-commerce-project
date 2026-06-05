import { Col, Container, Form, Row } from 'react-bootstrap'
import BreadCrumbs from '../components/BreadCrumbs'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <BreadCrumbs/>
    <div className="ltn__login-area pb-90">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="section-title-area text-center">
                        <h1>Register <br/>Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className="offset-lg-3">
                    <div className="account-login-inner">
                        <Form action="#" className="ltn__form-box contact-form-box">
                            <Form.Control type="text" name="firstname" placeholder="First Name"/>
                            <Form.Control type="text" name="lastname" placeholder="Last Name"/>
                            <Form.Control type="text" name="email" placeholder="Email*"/>
                            <Form.Control type="password" name="password" placeholder="Password*"/>
                            <Form.Control type="password" name="confirmpassword" placeholder="Confirm Password*"/>
                        
                                <Form.Check type="checkbox"  value="" className="checkbox-inline" label="I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy."/>
                                
                          
                          
                                <Form.Check type="checkbox"  value="" className="checkbox-inline" label='By clicking "create account", I consent to the privacy policy.'/>
                                
                          
                            <div className="btn-wrapper">
                                <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                            </div>
                        </Form>
                        <div className="by-agree text-center">
                            <p>By creating an account, you agree to our:</p>
                            <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
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