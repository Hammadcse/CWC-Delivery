import React from 'react'
import {Link} from 'react-router-dom'
import {Form,Row,Col,Button} from 'react-bootstrap'

export default function Delivery() {
    return (
        <>
            <section id="delivery" className="ptb-40">
            <div className="container">
                <div className="row counter-row">
                    <div className="col-md-3">
                            <div className="counter-item">
                                <h2>25700+</h2>
                                <span>Parcel Deliverd</span>
                            </div>
                    </div>
                        <div className="col-md-3">
                            <div className="counter-item">
                                <h2>64</h2>
                                <span>Districts Coverage</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-item">
                                <h2>500+</h2>
                                <span>Delivery Agent</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-item">
                                <h2>8000+ </h2>
                                <span>Registered Marchants</span>
                            </div>
                        </div>
                </div>
                    <div className="row delivery-form-row">
                        <div className="heading">
                            <h2 className="section-title">Delivery Calculator</h2>
                            <p>Get an idea of your delivery charges in advance for the convenience of your shipment</p>
                        </div>
                        <div className="delivery-form">
                            <Form className="for-wrap">
                                <div className="formInput">
                                    <Row className="">
                                        <Form.Group as={Col} className="pe-3 mb-md-4 mb-2" controlId="formGridProductWeight">
                                            <Form.Label>Product weight</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option></option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} className="ps-3 mb-md-4 mb-2" controlId="formGridProductPrice">
                                            <Form.Label>Product Price</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option></option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row className="">
                                        <Form.Group as={Col} className="pe-3 mb-md-3 mb-2" controlId="formGridPickupArea">
                                            <Form.Label>Pickup Area</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option></option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} className="ps-3 mb-md-3 mb-2" controlId="formGridDeliveryArea">
                                            <Form.Label>Delivery Area</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option></option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                <Button className="checkBtn" type="submit">
                                    Check
                                </Button>
                                <div className="see-more-info">
                                    <p>Want to know how much it can cost to send your parcel to any location?<Link to="/">See List</Link></p>
                                </div>
                                </div>
                            </Form>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}
