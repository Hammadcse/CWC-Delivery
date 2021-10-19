import React from 'react';
import {Card} from 'react-bootstrap';
import testImg1 from '../../../../dist/images/sattiki.png';
import testImg2 from '../../../../dist/images/yellow-page.png';
import testImg3 from '../../../../dist/images/chill-page.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <div className="testimonial-section bg-gray-color py-3 py-md-5">
                <div className="container my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title mb-3 mb-md-5">Our Clients</h2>
                        </div>
                        <div className="col-md-12">
                            <Slider {...settings}>
                                <div>
                                    <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <Card.Text className="testimonial-para">
                                            Since the beginning of CWC's development, we've collaborated. The shipment tracking and quick payment services provided by CWC have made running my business much easier than before.
                                            </Card.Text>

                                            <div className="testimonial-img-div"> 
                                                <img className="testimonial-img" src={testImg1} alt="Testimonial 1"/>
                                                <div>
                                                    <h4 className="author-name">Shattiki</h4>
                                                    <p className="author-page">Share House</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <Card.Text className="testimonial-para">
                                            Since the beginning of CWC's development, we've collaborated. The shipment tracking and quick payment services provided by CWC have made running my business much easier than before.
                                            </Card.Text>

                                            <div className="testimonial-img-div"> 
                                                <img className="testimonial-img" src={testImg2} alt="Testimonial 2"/>
                                                <div>
                                                    <h4 className="author-name">Yellow Pages</h4>
                                                    <p className="author-page">Share House</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <Card.Text className="testimonial-para">
                                            Since the beginning of CWC's development, we've collaborated. The shipment tracking and quick payment services provided by CWC have made running my business much easier than before.
                                            </Card.Text>

                                            <div className="testimonial-img-div"> 
                                                <img className="testimonial-img" src={testImg3} alt="Testimonial 3"/>
                                                <div>
                                                    <h4 className="author-name">Chill Beats</h4>
                                                    <p className="author-page">Share House</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center testimonial-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                            <Card.Text className="testimonial-para">
                                            Since the beginning of CWC's development, we've collaborated. The shipment tracking and quick payment services provided by CWC have made running my business much easier than before.
                                            </Card.Text>

                                            <div className="testimonial-img-div"> 
                                                <img className="testimonial-img" src={testImg2} alt="Testimonial 4"/>
                                                <div>
                                                    <h4 className="author-name">Yellow Pages</h4>
                                                    <p className="author-page">Share House</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
