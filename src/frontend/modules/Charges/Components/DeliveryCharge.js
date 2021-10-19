import React,{useState} from 'react'
import { Tabs,Tab,Table} from 'react-bootstrap';
import ChargesBaner from '../../../../dist/images/Charges/baner-charges.jpg'

export default function DeliveryCharge() {
    const [key, setKey] = useState('Dhaka Based Merchants');
    return (
        <>
        <section id="charges">
            <div className="charges-baner">
                <img src={ChargesBaner} alt="image" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="heading">
                        <h2 className="section-title">See Delivery Charge</h2>
                    </div>
                    <div className="charges-tab-wrapper">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="Dhaka Based Merchants" title="Dhaka Based Merchants">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Package Weight</th>
                                                <th>Inside Dhaka Charge (Taka)</th>
                                                <th>Periphery District Charge (Taka)</th>
                                                <th>Outside Dhaka Charge (Taka)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Price for 1 KG</td>
                                                <td>50</td>
                                                <td>90</td>
                                                <td>120</td>
                                            </tr>
                                            <tr>
                                                <td>Next additional Per KG</td>
                                                <td>30</td>
                                                <td>30</td>
                                                <td>30</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="charge-type">
                                        <h6>Cash-On-Delivery:</h6>
                                        <p>1% Cash on Delivery charge will be applicable on the collected amount.</p>
                                    </div>
                                    <div className="charge-type">
                                        <h6>Partial Delivery Service:</h6>
                                        <p>For Partial delivery cases, 50% of delivery charge will apply to cover inbound cost, in addition to the delivery charge.</p>
                                    </div>
                                </Tab>
                                <Tab eventKey="Outside Dhaka Merchantse" title="Outside Dhaka Merchantse">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Package Weight</th>
                                                <th>Inside Same District Charge
                                                    (Taka)</th>
                                                <th>Inside Same Divition Charge
                                                    (Taka)</th>
                                                <th>Outside District Charge
                                                    (Taka)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Price for 1 KG</td>
                                                <td>50</td>
                                                <td>90</td>
                                                <td>120</td>
                                            </tr>
                                            <tr>
                                                <td>Next additional Per KG</td>
                                                <td>30</td>
                                                <td>30</td>
                                                <td>30</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="charge-type">
                                        <h6>Cash-On-Delivery:</h6>
                                        <p>1% Cash on Delivery charge will be applicable on the collected amount.</p>
                                    </div>
                                    <div className="charge-type">
                                        <h6>Partial Delivery Service:</h6>
                                        <p>For Partial delivery cases, 50% of delivery charge will apply to cover inbound cost, in addition to the delivery charge.</p>
                                    </div>
                                </Tab>
                            </Tabs>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
