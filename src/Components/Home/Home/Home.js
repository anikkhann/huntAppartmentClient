import React from 'react';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import HouseRent from '../HouseRent/HouseRent';
import NavBar from '../NavBar/NavBar'
import Service from '../Service/Service';
const Home = () => {
    return (
        <div>
            <NavBar />
            <HeaderMain />
            <HouseRent />
            <Service />
            <Footer />

        </div>
    );
};

export default Home;