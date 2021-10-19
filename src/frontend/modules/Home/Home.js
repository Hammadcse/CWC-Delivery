import React from 'react';
import Header from '../Header/Header';
import Banner from './components/Banner';
import Footer from '../Footer/Footer';
import Services from './components/Services';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import BrandSlide from './components/BrandSlide';
import About from './components/About';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Delivery />
            <About />
            <Testimonials />
            <BrandSlide />
            <Footer />
        </div>
    );
};

export default Home;