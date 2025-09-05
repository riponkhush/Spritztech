import React from 'react';
import Banner from './Banner';
import MoreThan from './MoreThan';
import HowWe from './HowWe';
import OurFeatures from './OurFeatures';
import Benifit from './Benifit';
import Service from './Service';
import PeopleSaying from './PeopleSaying';
import Footer from '../../component/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MoreThan></MoreThan>
            <HowWe></HowWe>
            <OurFeatures></OurFeatures>
            <Benifit></Benifit>
            <Service></Service>
            <PeopleSaying></PeopleSaying>
            <Footer></Footer>
        </div>
    );
};

export default Home;