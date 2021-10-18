import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Delivery from './components/Delivery';
import About from './components/About';

const Home = () => {
    return (
        <div>
            <Header />
            <Delivery />
            <About />
            <Footer />
        </div>
    );
};

export default Home;