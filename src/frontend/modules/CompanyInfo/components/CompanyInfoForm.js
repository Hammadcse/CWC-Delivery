import React from 'react'

export default function CompanyInfoForm() {
    return (
        <>
        <section id="company-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="company-form">
                                <h2 className="section-title">Company Info</h2>
                                <Form className="form-wrap">
                                    <div className="formInput">
                                        <Row className="">
                                            <Form.Group as={Col} className="pe-3 mb-md-4 mb-2" controlId="formGridCompanyName">
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control type="name" placeholder="Enter Company Name" />
                                            </Form.Group>
                                            <Form.Group as={Col} className="ps-3 mb-md-4 mb-2" controlId="formGridSiteUrl">
                                                <Form.Label>Site URL(Facebook, Web)</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your Site Url" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="">
                                            <Form.Group as={Col} className="pe-3 mb-md-3 mb-2" controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your City name" />
                                            </Form.Group>
                                            <Form.Group as={Col} className="ps-3 mb-md-3 mb-2" controlId="formGridZone">
                                                <Form.Label>Zone</Form.Label>
                                                <Form.Control type="number" placeholder="Enter your Zone" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="">
                                            <Form.Group className="mb-md-3" controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your City name" />
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
