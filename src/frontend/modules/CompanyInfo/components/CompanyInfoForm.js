import React from 'react'

export default function CompanyInfoForm() {
    return (
        <>
        <section id="company-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
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
                                    </div>
                                </Form>
                            </div>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
