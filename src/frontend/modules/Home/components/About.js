import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
        <section id="about">
            <div className="about-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-text">
                                <h2>Why CWC Delivery Service </h2>
                                <p>CWC Delivery Service is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.</p>
                                <p>We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
                                <Link to="/" className="primary-btn about-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
