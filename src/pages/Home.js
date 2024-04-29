import React from 'react';
import Advertisement from '../components/Advertisement';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import WhoWeAre from '../components/WhoWeAre';
import Banner from '../components/Banner';
import OurWorks from '../components/OurWorks';


const Home = () => {
    return (
        <>
            <Banner/>
            <AboutUs />
            <WhoWeAre />
            <FAQ />
            <OurWorks/>
            <Advertisement/>
            <Footer />
        </>

    )
}

export default Home;

