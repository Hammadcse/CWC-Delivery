import React from 'react';
import {Card} from 'react-bootstrap';
import brandImg1 from '../../../../dist/images/apex.png';
import brandImg2 from '../../../../dist/images/daraz.png';
import brandImg3 from '../../../../dist/images/evaly.png';
import brandImg4 from '../../../../dist/images/lotto.png';
import brandImg5 from '../../../../dist/images/othoba.png';
import brandImg6 from '../../../../dist/images/lereve.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BrandSlide() {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 7,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 5,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <div className="brand-section py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...settings} className="brand-slider">
                                <div>    
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg1} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg2} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg3} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg4} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg5} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg6} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg1} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg2} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg3} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg4} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg5} alt="Brand"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="brand-img-div">
                                        <img className="brand-img" src={brandImg6} alt="Brand"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
