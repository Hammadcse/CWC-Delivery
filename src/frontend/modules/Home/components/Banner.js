import React from 'react'

export default function Banner() {
    return (
        <div>
            <div className="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 ms-auto text-center pt-lg-5 mt-lg-5 mt-md-3">
                            <h1 className="banner-title mt-4 mt-md-5">Do Fast Delivary</h1>
                            <div className="banner-inp-wrapper">
                                <input className="banner-search-inp"/>
                                <button type="submit" className="banner-submit-btn">Track Parcel</button>
                            </div>
                            <p className="banner-txt">With us, you may get your courier delivered is the safest way possible!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
