import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MenuGrid from '../components/MenuGrid';
import SpecialOffers from '../components/SpecialOffers';
import SignatureCategories from '../components/SignatureCategories';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="bg-dark-900 min-h-screen">
            {/* Components stacked vertically */}
            <Navbar />
            <Hero />
            <SpecialOffers />
            <SignatureCategories />
            <MenuGrid />
            <Features />
            <HowItWorks />
        </div>
    );
};

export default Home;
