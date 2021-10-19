import React from 'react';
import {Card} from 'react-bootstrap';
import sparcelService from '../../../../dist/images/drop-shipping2.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Services() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <div className="service-section bg-gray-color py-3 py-md-5 ">
                <div className="container my-3 my-md-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title mb-3 mb-md-5">Our Services</h2>
                        </div>
                        <div className="col-md-12">
                            <Slider {...settings}>
                                <div>
                                    <Card className="text-center service-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                        <div className="card-service-img-div"> 
                                                <img className="card-service-img" src={sparcelService} alt="Service"/>
                                        </div>
                                            <Card.Title className="service-title">Parcel Delivery</Card.Title>
                                            <Card.Text className="service-para">
                                            First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center service-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                        <div className="card-service-img-div"> 
                                                <img className="card-service-img" src={sparcelService} alt="Service"/>
                                        </div>
                                            <Card.Title className="service-title">Warehousing</Card.Title>
                                            <Card.Text className="service-para">
                                            First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center service-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                        <div className="card-service-img-div"> 
                                                <img className="card-service-img" src={sparcelService} alt="Service"/>
                                        </div>
                                            <Card.Title className="service-title">Bulk Shipment</Card.Title>
                                            <Card.Text className="service-para">
                                            First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center service-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                        <div className="card-service-img-div"> 
                                                <img className="card-service-img" src={sparcelService} alt="Service"/>
                                        </div>
                                            <Card.Title className="service-title">Logistics Services</Card.Title>
                                            <Card.Text className="service-para">
                                            First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="text-center service-card" style={{width:'93%', margin: '0 auto'}}>
                                        <Card.Body>
                                        <div className="card-service-img-div"> 
                                                <img className="card-service-img" src={sparcelService} alt="Service"/>
                                        </div>
                                            <Card.Title className="service-title">Warehousing</Card.Title>
                                            <Card.Text className="service-para">
                                            First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                            </Card.Text>
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
