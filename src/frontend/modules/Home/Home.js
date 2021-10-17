import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Delivery from './components/Delivery';

const Home = () => {
    return (
        <div>
            <Header />
            <Delivery />
            <Footer />
        </div>
    );
};

export default Home;